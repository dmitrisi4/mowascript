[[🌀 Interslavic](../05_cli.md) · [🌲 East Slavic](../east/05_cli.md)]

# 💻 MowaJS Command-Line Interface (CLI)

MowaJS comes with a built-in CLI that lets you quickly run, compile, watch, and initialize projects using `.mowa` files.

---

## 📦 Installation (globally or via `npx`)

```bash
# global installation
npm install -g mowascript

# or run directly via npx
npx mowascript <command>
```

---

## 🔧 CLI Commands

### `mowa init <project_name>`
Initializes a new project with starter structure and templates:

```
my-project/
├── docs/
│   └── doc.md
├── src/
│   └── index.mowa
├── dist/
├── package.json
├── README.md
```

🧩 Creates `package.json`, copies template files, adds dependencies.

---

### `mowa build`
Compiles all `.mowa` files from `src/` into `.js` files in `dist/`.

- Reads all `.mowa` files in `src/`
- Transpiles them to JavaScript
- Saves output in `dist/` with the same structure

---

### `mowa run <file.mowa>`
Runs a `.mowa` file directly:

- Transpiles to JavaScript
- Prints the output code to console
- Executes it via `eval`

---

### `mowa watch`
Watch mode:

- Watches all `.mowa` files inside `src/`
- Automatically recompiles on change
- Deletes corresponding `.js` when `.mowa` is removed

Super useful during development — no need to re-run `build` manually.

---

## 📄 Under the Hood
The CLI is implemented in `mowa.js`. Core functions include:

- `initProject()` — creates structure and package.json
- `buildProject()` — compiles `.mowa` → `.js`
- `runFile()` — runs a file via `eval`
- `watchProject()` — live watch and transpile

---

## 🧠 Tips
- Use `mowa watch` during development
- Write code in `src/`, results appear in `dist/`
- Add `npm run build` to your scripts for convenience

---

## ⛓ Sample `package.json` after `init`
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "mowa build",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "mowascript": "^1.0.0"
  }
}
```

---

This CLI is the heart of MowaJS. It makes running, compiling, and bootstrapping projects smooth — and your experience delightfully Slavic ❤️

