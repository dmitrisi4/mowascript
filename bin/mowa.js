#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';
import {fileURLToPath} from 'url';
import {transpile} from '../src/transpile.js';
import {execSync} from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const command = args[0];

function runFile(filePath) {
	const code = fs.readFileSync(filePath, 'utf-8');
	const jsCode = transpile(code);
	console.log('--- Транспайлений код ---\n');
	console.log(jsCode);
	console.log('\n--- Результат виконання ---\n');
	eval(jsCode);
}

function buildProject() {
	const srcDir = path.resolve('src');
	const distDir = path.resolve('dist');
	fs.mkdirSync(distDir, {recursive: true});

	const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.mowa'));
	for (const file of files) {
		const code = fs.readFileSync(path.join(srcDir, file), 'utf-8');
		const js = transpile(code);
		const outputName = file.replace(/\.mowa$/, '.js');
		fs.writeFileSync(path.join(distDir, outputName), js);
		console.log(`✅ Зібрано: ${file} → ${outputName}`);
	}

	const htmlPath = path.join('src', 'index.html');
	if (fs.existsSync(htmlPath)) {
		const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
		const updatedHtml = htmlContent.replace(/<script\s+src=["'](.+?)\.mowa["']>/g, '<script src="$1.js">');
		fs.writeFileSync(path.join(distDir, 'index.html'), updatedHtml);
		console.log(`📄 Створено dist/index.html з оновленим <script src="...">`);
	}
}

// ---INIT---
function initProject(target = '.') {
	const templateDir = path.join(__dirname, '../templates');
	const destDir = path.resolve(target);

	if (!fs.existsSync(destDir)) {
		fs.mkdirSync(destDir, {recursive: true});
		console.log(`📁 Створено папку "${target}"`);
	}

	// Обработка package.json
	const userPkgPath = path.join(destDir, 'package.json');
	const templatePkgPath = path.join(templateDir, 'package.json');
	let userPackage = {};

	if (fs.existsSync(userPkgPath)) {
		userPackage = JSON.parse(fs.readFileSync(userPkgPath, 'utf-8'));
	}

	const templatePackage = fs.existsSync(templatePkgPath)
		? JSON.parse(fs.readFileSync(templatePkgPath, 'utf-8'))
		: {};

	userPackage.name = userPackage.name || templatePackage.name || 'mowa app';
	userPackage.version = userPackage.version || '1.0.0';
	userPackage.type = 'module';

	userPackage.scripts = {
		...templatePackage.scripts,
		...userPackage.scripts // пользовательские имеют приоритет
	};


	userPackage.dependencies = {
		...templatePackage.dependencies,
		...userPackage.dependencies
	};

	userPackage.devDependencies = {
		...templatePackage.devDependencies,
		...userPackage.devDependencies
	};

	const deps = userPackage.dependencies;
	if (!deps['mowascript']) {
		deps['mowascript'] = templatePackage.dependencies?.['mowascript'] || '^1.0.0';
	}

	fs.writeFileSync(userPkgPath, JSON.stringify(userPackage, null, 2), 'utf-8');
	console.log('🧩 Оновлено або створено package.json');

	// Копіюємо інші файли, крім package.json
	fs.readdirSync(templateDir).forEach(file => {
		if (file === 'package.json') return;
		const src = path.join(templateDir, file);
		const dest = path.join(destDir, file);
		fs.cpSync(src, dest, {recursive: true});
	});

	console.log(`✅ Створено шаблон проєкту в "${target}"`);
	console.log('➡ Далі запусти:');
	console.log(`   cd ${target}`);
	console.log('   npm install');
	console.log('   npm run build');
	console.log('   npm start');
}

// ---WATCH---
function watchProject() {
	const srcDir = path.resolve('src');
	const distDir = path.resolve('dist');

	fs.mkdirSync(distDir, {recursive: true});

	console.log('👀 Sledujem fajly v src/...');

	console.log(srcDir);
	// const watcher = chokidar.watch(path.join(srcDir, '**/*.mowa'), {
	const watcher = chokidar.watch(`${srcDir}/`, {
		ignoreInitial: false,
		persistent: true,
	});

	function transpileFile(file) {
		const relativePath = path.relative(srcDir, file);
		const isHtml = file.endsWith('.html');

		if (isHtml) {
			const htmlContent = fs.readFileSync(file, 'utf-8');
			const updatedHtml = htmlContent.replace(/<script\s+src=["'](.+?)\.mowa["']>/g, '<script src="$1.js">');
			fs.mkdirSync(path.dirname(path.join(distDir, relativePath)), { recursive: true });
			fs.writeFileSync(path.join(distDir, relativePath), updatedHtml);
			console.log(`📄 Obranotvano HTML: ${relativePath}`);
			return;
		}

		const outputPath = path.join(distDir, relativePath.replace(/\.mowa$/, '.js'));
		console.log(`🔄 Obrabotka fajla: ${relativePath}`);

		try {
			const code = fs.readFileSync(file, 'utf-8');
			const js = transpile(code);
			fs.mkdirSync(path.dirname(outputPath), { recursive: true });
			fs.writeFileSync(outputPath, js);
			console.log(`✅ Obnovljeno: ${relativePath}`);
		} catch (err) {
			console.error(`❌ Greška vo fajlu ${relativePath}:`, err.message);
		}
	}

	//
	watcher
		.on('ready', () => {
			console.log('🚀 Sleduvač jest gotovy\n');
			console.log('📂 Sledujem put:', `${srcDir}/`);
		})
		.on('add', transpileFile)
		.on('change', transpileFile)
		.on('unlink', file => {
			const relativePath = path.relative(srcDir, file);
			const outputPath = path.join(distDir, relativePath.replace(/\.mowa$/, '.js'));
			if (fs.existsSync(outputPath)) {
				fs.unlinkSync(outputPath);
				console.log(`🗑 Izbrisano: ${relativePath}`);
			}
		});

}

switch (command) {
	case 'run':
		runFile(args[1]);
		break;
	case 'build':
		buildProject();
		break;
	case 'init':
		initProject(args[1]);
		break;
	case 'watch':
		watchProject();
		break;
	default:
		console.log('Команди: init | build | run <файл>');
}
