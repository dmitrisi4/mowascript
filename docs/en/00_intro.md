[[🌀 Interslavic](../../00_intro.md) · [🌲 East Slavic](../east/00_intro.md)]

# 🌐 Introduction to MowaJS

**MowaJS** is an experimental programming language with natural, Slavic-inspired syntax that compiles to JavaScript.

Its purpose is to bring code closer to human language for native Slavic speakers — while keeping the full power of the JavaScript ecosystem.

---

## ✨ What is MowaJS?

MowaJS is a **transpiler** that allows you to write code using Ukrainian, Belarusian, Russian, or Interslavic syntax. It transforms `.mowa` files into standard `.js` JavaScript code.

> Example:
> ```mowa
> функція привітати(ім’я) {
>   друкувати("Привіт, " + ім’я);
> }
> ```
>
> Compiles to:
> ```js
> function привітати(ім’я) {
>   console.log("Привіт, " + ім’я);
> }
> ```

---

## 🎯 Project Goals

- Let developers write code in their **native Slavic language**
- Explore how natural language influences **logic and syntax**
- Build a bridge between **cultures and code**
- And yes — just for **fun** 🍄

---

## 🧭 Why JavaScript?

- JavaScript is the **core of the modern web**
- Massive ecosystem: npm, browsers, Node.js
- Easily integrates with existing apps and workflows
- MowaJS doesn’t replace JS — it’s a **syntactic overlay** with a new voice

---

## 🌍 Who is this project for?

- 🧒 Beginners struggling with English syntax
- 👩‍🏫 Teachers who want to explain code using native languages
- 🧠 Devs who love linguistics, syntax design, or DSLs
- 🧪 Fans of experimental programming languages

---

## 🚀 Current Status

| Feature                              | Status         |
|--------------------------------------|----------------|
| Basic constructs (`if`, `else`, etc.)| ✅ Done         |
| Transpilation `.mowa` → `.js`        | ✅ Done         |
| CLI commands (`init`, `build`, etc.) | ✅ Done         |
| npm package `mowa`                   | ✅ Published    |
| Dialect support (UA, BY, RU, ISV)    | ✅ Partial      |
| TypeScript integration               | 🔜 Planned      |
| Interactive playground               | 🔜 Planned  |
| Web-based code editor                | 🔜 Not started  |

---

## 🛠 Usage Example

```mowa
функція квадрат(число) {
  повернути число * число;
}

друкувати(квадрат(5));
```

---

MowaJS is a bridge between **language and logic** — making code not just readable, but **relatable** ✨

