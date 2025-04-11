[[🌲 East Slavic](../07_contribute.md) · [🇺🇸 English](../en/07_contribute.md)]

# 🤝 Kako pridružiti se razvitku MowaJS

MowaJS jest open-source projekt, inspirovany idejej pribliziti programovanje k slavjanskim jezykam. Mi vsegda s radostju priglašajemo novih učastnikov i kontribucij!

---

## 📁 Struktura repozitorija

```
mowascript/
├── bin/                # CLI-skripty (mowa.js)
│   └── mowa.js
├── dist/               # Kompilovane JS-fajly
├── examples/           # Prikłady Mowa-koda
├── node_modules/
├── src/                # Jezgro transpajlera
│   ├── map/            # Slovniki (by, ua, ru, isv...)
│   │   ├── by.js
│   │   ├── ua.js
│   │   ├── ru.js
│   │   ├── isv.js
│   │   └── index.js
│   └── transpile.js    # Glavna logika transpajla
├── templates/          # Šablony za `mowa init`
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

## 📦 Instalacija za razvoj

```bash
git clone https://github.com/tvoj-nik/mowajs.git
cd mowajs
npm install
```

Za lokalno testovanje CLI:
```bash
node bin/mowa.js build
```

---

## ✅ Kako pridati svoj kontribuciju

1. **Forkuj repozitorij**
2. Sozdaj novu vetku: `git checkout -b feature/tvoje-zadanje`
3. Vnesti izměny, dodaj komentary v kod
4. Sozdaj Pull Request s opisom

---

## 💡 Ideje za kontribuciji

- 🔤 Dodati novy jezyk v slovnik (na primer: polsky, srbski)
- 🧪 Dodati testy za suščejuće konstrukcije
- 🧱 Uljučiti CLI (novi komandy, flags, i drugoje)
- 📘 Dodati prikłady `.mowa` koda v `examples/`
- 🪄 Refaktoring jezgra `transpile.js`

---

## 🛡 Kod-stil

- Ispolzujemo `ESM` (`import` / `export`)
- Minimum zavisimosti
- Importuj toľko to, što realno nado
- Komentary su poželatelne, osoblivo v pravilah transpajla

---

## 📬 Kontakt

- Telegram: [@tvoj_nik](https://t.me/tvoj_nik)
- GitHub Issues — za bagy i funkcije
- Pull Requests — za izměny

---

Spolku mi možemo sozdati nešto unikalno dlja vsej slavjanskoj obščiny 💙