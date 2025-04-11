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

## 📦 Installation (globally or via `npx`)

```bash
# global installation
npm install -g mowascript
mowa init
npm install
npm run watch

# or run directly via npx
npx mowascript <command>
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

Apache-2.0. This project is free to use, modify, and contribute to.

—
Made with love for all Slavic people 🌍


- Telegram: [@rio_de_sich](https://t.me/rio_de_sich)
- [GitHub Issues](https://github.com/dmitrisi4/mowascript/issues) — za bagy i funkcije
- [Pull Requests](https://github.com/dmitrisi4/mowascript/pulls) — za izměny
