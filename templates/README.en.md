# mowascript

🌍 Other languages:
[🌲 Interslavic](README.md) • [🔆 East ](README.east.md) •
💡 ***Mowascript*** is a transpiler that allows you 
to write JavaScript using Ukrainian, Russian, Belarusian, and Interslavic keywords.
## 📂 Project Structure

```
mowascript/
├── bin/             ← CLI interface (`mowa`)
├── src/             ← core transpiler logic
│   ├── transpile.js
│   └── map/         ← language dictionaries: uk, ru, by
├── templates/       ← project template
│   └── src/main.mowa
├── package.json
├── README.md
```

## 🔧 CLI Commands

| Command               | Description                                             |
|----------------------|---------------------------------------------------------|
| `mowa run file.mowa` | Transpiles and runs a file                             |
| `mowa build`         | Transpiles all `.mowa` files from `src/` to `dist/`    |
| `mowa init`          | Creates a new project from the default template        |
| `mowa watch`         | Watches for changes in `src/` and automatically builds |

## 🚀 Quick Start

```bash
mowa init my-project
cd my-project
npm install
npm run build
npm start
```

## 📝 Example `package.json`

```json
{
  "type": "module",
  "scripts": {
    "build": "mowa build",
    "start": "mowa run src/main.mowa",
    "watch": "mowa watch"
  },
  "dependencies": {
    "mowascript": "^1.0.0"
  },
  "devDependencies": {
    "chokidar": "^4.0.3"
  }
}
```

## 📄 Official File Extension

```
*.mowa ← official file extension for movascript source files
```

## 🌐 Supported Languages

- Ukrainian
- Russian
- Belarusian
- Interslavic 🌀

## 🔓 License

MIT License. This project is free to use, modify, and contribute to.

—
Made with love for all Slavic people 🌍

