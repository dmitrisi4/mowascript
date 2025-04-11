# mowascript
🌍 Інші мови:
[[🌲 Interslavic](README.isv.md)[🇺🇸 English](README.en.md)


💡 ***Mowascript*** Транспайлер, что дозволяє пісаць JavaScript 
українською, рускою, па-беларуску 🪆 і даже на інтерславскім 🌿 языце.


## 📂 Структура проєкту

```
mowascript/
├── bin/
│   └── mowa.js            ← CLI-интерфейс (`mowa`)
├── src/
│   ├── transpile.js       ← Основна логіка транспайлу
│   └── map/               ← Словники мов
│       ├── by.js          ← Беларуская
│       ├── ru.js          ← Русский
│       ├── ua.js          ← Українська
│       └── index.js       ← Обʼєднання
├── templates/             ← Шаблон для `init`
│   ├── src/main.mowa
│   └── package.json
├── package.json
├── README.md
```

## 📦 Офіційне розширення файлів

```
*.mowa — офіційне розширення файлів мови movascript
```

## 🔧 CLI-команды, которые поддерживаются:

| Команда               | Что делает                                          |
|----------------------|------------------------------------------------------|
| `mowa run файл.mowa` | Транспайлит и выполняет файл                        |
| `mowa build`         | Транспайлит все файлы в `src/` и сохраняет в `dist/`|
| `mowa init`          | Створює шаблон проєкту в обраній папці              |
| `mowa watch`         | Стежить за змінами у `src/` і пересобирає автоматично|

---

## 🚀 Швидкий старт

### 1. Инициализация проєкту

## 📦 Установка (глобально або через npx)

```bash
# глобальна установка
npm install -g mowascript
npm install -g mowascript
mowa init
npm install
npm run watch

# або запуск без установки
npx mowascript <команда>
```

---
### 2. Структура шаблонного проєкту

```
my-app/
├── src/
│   └── main.mowa ← Твій перший файл на movascript
├── dist/         ← Автоматично створюється після build
├── package.json
```

### 3. Запуск

```bash
npm run build    # Збірка проєкту
npm start        # Виконання main.mowa
npm run watch    # Автозбірка при змінах
```

---

## 📝 Пример выкарыстання в `package.json`

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

---

## 🔒 Права на виконання CLI

Перед запуском, не забудь зробити `mowa.js` виконавчим:

```bash
chmod +x bin/mowa.js
```

---

## 📘 Приклади

```mowa
конст імя = "Дзіма";
скажы("Прывітанне, " + імя + "!");
```

➡️ После транспайла:

```js
const імя = "Дзіма";
console.log("Прывітанне, " + імя + "!");
```

---

--- 🌾
