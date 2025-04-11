[[🌀Interslavic](../07_contribute.md) [🇺🇸 English](../en/07_contribute.md)]

# 🤝 Як долучитись до розвитку MowaJS

MowaJS — це open-source проєкт, натхненний ідеєю зробити програмування ближчим до слов’янських мов. Ми завжди раді новим учасникам і внескам!

---

## 📁 Структура репозиторію

```
mowascript/
├── bin/                # CLI-скрипти (mowa.js)
│   └── mowa.js
├── dist/               # Скомпільовані JS-файли
├── examples/           # Приклади Mowa-коду
├── node_modules/
├── src/                # Ядро транслятора
│   ├── map/            # Словники (by, ua, ru, isv...)
│   │   ├── by.js
│   │   ├── ua.js
│   │   ├── ru.js
│   │   ├── isv.js
│   │   └── index.js
│   └── transpile.js    # Головна логіка транспайлу
├── templates/          # Шаблони для `mowa init`
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

## 📦 Встановлення для розробки

```bash
git clone https://github.com/твій-нік/mowajs.git
cd mowajs
npm install
```

Для локального тестування CLI:
```bash
node bin/mowa.js build
```

---

## ✅ Як зробити свій внесок

1. **Форкни репозиторій**
2. Створи нову гілку: `git checkout -b feature/твоє-завдання`
3. Внеси зміни, додай коментарі до коду
4. Створи Pull Request і додай опис

---

## 💡 Ідеї для внеску

- 🔤 Додати нову мову до словника (напр. польську, сербську)
- 🧪 Додати тести для існуючих конструкцій
- 🧱 Покращити CLI (нові команди, flags, тощо)
- 📘 Додати приклади `.mowa` коду в `examples/`
- 🪄 Рефакторинг ядра `transpile.js`

---

## 🛡 Стиль коду

- Використовуємо `ESM` (`import` / `export`)
- Мінімум залежностей
- Імпортуй лише те, що справді потрібно
- Коментарі бажані, особливо для трансляційних правил

---


## 📬 Зв’язок

- Telegram: [@твій_нік](https://t.me/твій_нік)
- GitHub Issues — для багів та фіч
- Pull Requests — для змін

---

Разом ми зможемо створити щось унікальне для всієї слов’янської спільноти 💙