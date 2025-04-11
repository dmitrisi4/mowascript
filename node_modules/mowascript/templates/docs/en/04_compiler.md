[[🌀 Interslavic](../04_compiler.md) · [🌲 East Slavic](../east/04_compiler.md)]

# 🛠️ MowaJS Compiler Architecture

The MowaJS compiler (or transpiler) converts code written in clear, Slavic-based syntax into valid JavaScript. It supports multilingual keywords, flexible configuration, syntax transformation, and can be run as a CLI tool or library.

---

## ⚙️ Compiler Workflow

```text
┌────────────┐
│  Input     │     (.mowa source code)
│   Code     │
└────┬───────┘
     │
     ▼
┌────────────┐
│  Lexer     │     (tokenizes input)
└────┬───────┘
     │
     ▼
┌────────────┐
│  Parser    │     (builds AST)
└────┬───────┘
     │
     ▼
┌────────────────────┐
│ Translator/Transformer │  (transforms AST to JS AST)
└────┬───────────────┘
     │
     ▼
┌────────────┐
│ Generator  │     (outputs .js file)
└────────────┘
```

The compiler is based on language-specific dictionaries:

- Ukrainian (`ua.js`)
- Belarusian (`by.js`)
- Russian (`ru.js`)
- Interslavic (`isv.js`)
- ... and more

During parsing, it compares words from the code against these dictionaries and automatically maps them to JS keywords or methods.

```json
{
  "якщо": "if",
  "поки": "while",
  "додайДоРядка": {
    "target": "concat",
    "type": "string"
  }
}
```

---

## 🌲 Abstract Syntax Tree (AST)

MowaJS builds an abstract syntax tree while respecting translations:

```js
якщо (вік >= 18) {
  кажи("Дорослий");
}
```

Transforms to:

```js
if (вік >= 18) {
  console.log("Дорослий");
}
```

---

## 🔄 Transformation Steps

Key stages:

- Aliases → JS keywords: `функція` → `function`
- Methods → APIs: `govori()` → `console.log()`
- Logic → Symbols: `і` → `&&`, `або` → `||`
- Dialect support: handled automatically via dictionary

---

## 💡 Features

- ✅ Multi-syntax support
- ✅ Custom dictionaries
- ✅ CLI support: `mowa build`, `mowa run`
- ⏳ Linting + syntax highlighting (planned)
- ⏳ Web playground (in development)

---

## 🚀 Future Plans

- AST-based linting and autocomplete
- Live in-browser editor
- Integration with editors (VSCode, WebStorm)
- Template preprocessor
- Full TypeScript type support in Mowa

