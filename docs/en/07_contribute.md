[[🌀 Interslavic](../../07_contribute.md) · [🌲 East Slavic](../east/07_contribute.md)]

# 🤝 How to Contribute to MowaJS

MowaJS is an open-source project inspired by the idea of making programming more accessible for Slavic-language speakers. We warmly welcome new contributors and ideas!

---

## 📁 Repository Structure

```
mowascript/
├── bin/                # CLI scripts (mowa.js)
│   └── mowa.js
├── dist/               # Compiled JavaScript output
├── examples/           # Code examples in Mowa
├── node_modules/
├── src/                # Transpiler core
│   ├── map/            # Dictionaries (by, ua, ru, isv...)
│   │   ├── by.js
│   │   ├── ua.js
│   │   ├── ru.js
│   │   ├── isv.js
│   │   └── index.js
│   └── transpile.js    # Main transpile logic
├── templates/          # Templates for `mowa init`
│   ├── docs/
│   ├── src/
│   ├── package.json
│   └── README*.md
├── LICENSE
├── NOTICE
├── package.json
├── package-lock.json
├── README.md
├── README.en.md
└── README.east.md
```

---

## 📦 Setting Up for Development

```bash
git clone https://github.com/your-username/mowajs.git
cd mowajs
npm install
```

To test the CLI locally:
```bash
node bin/mowa.js build
```

---

## ✅ How to Contribute

1. **Fork the repository**
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and include comments
4. Open a Pull Request with a clear description

---

## 💡 Contribution Ideas

- 🔤 Add a new language dictionary (e.g., Polish, Serbian)
- 🧪 Add tests for existing constructs
- 🧱 Improve the CLI (new commands, flags, etc.)
- 📘 Add `.mowa` examples to the `examples/` folder
- 🪄 Refactor core transpiler logic in `transpile.js`

---

## 🛡 Code Style Guidelines

- Use `ESM` (`import` / `export` syntax)
- Keep dependencies to a minimum
- Import only what's needed
- Comment your code, especially transformation rules

---

## 📬 Contact

- Telegram: [@your_username](https://t.me/your_username)
- GitHub Issues — for bug reports and feature requests
- Pull Requests — to submit code improvements

---

Together, we can build something truly unique for the entire Slavic-speaking dev community 💙

