#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { transpile } from '../src/transpile.js';
import { execSync } from 'child_process';

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
	fs.mkdirSync(distDir, { recursive: true });

	const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.mowa'));
	for (const file of files) {
		const code = fs.readFileSync(path.join(srcDir, file), 'utf-8');
		const js = transpile(code);
		const outputName = file.replace(/\.mowa$/, '.js');
		fs.writeFileSync(path.join(distDir, outputName), js);
		console.log(`✅ Зібрано: ${file} → ${outputName}`);
	}
}

function initProject(target = '.') {
	const templateDir = path.join(__dirname, '../templates');
	const destDir = path.resolve(target);

	if (fs.existsSync(destDir)) {
		console.log(`📁 Папка "${target}" вже існує`);
	} else {
		fs.mkdirSync(destDir, { recursive: true });
	}

	fs.cpSync(templateDir, destDir, { recursive: true });
	console.log(`✅ Створено шаблон проєкту в "${target}"`);
	console.log('➡ Далі запусти:');
	console.log(`   cd ${target}`);
	console.log('   npm install');
	console.log('   npm run build');
	console.log('   npm start');
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
	default:
		console.log('Команди: init | build | run <файл>');
}
