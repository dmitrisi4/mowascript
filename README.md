# mowascript
🌍 Iny jezyky:
[🔆 East ](README.east.md) • [🇺🇸 English](README.en.md) •

💡🌍 ***Mowascript*** je transpajler, ktory dovoljava pisati JavaScript 
na ukrajinskom, beloruskom, ruskom ta interslavskom 🌿 jezyku.

## 📂 Struktura projekta

```
mowascript/
├── bin/             ← CLI-interfejs `mowa`
├── src/             ← kod transpajlera
│   ├── transpile.js
│   └── map/         ← slovniki: uk, ru, by
├── templates/       ← šablon projekta
│   └── src/main.mowa
├── package.json
├── README.md
```

## 📦 Ustanovka (globalno ili čerez npx)

```bash
# globalna instalacija
npm install -g mowascript
mowa init
npm install
npm run watch
# ili bez instalacije
npx mowascript <komanda>
```

## 🔧 CLI komandy

| Komanda               | Objasnjenje                                        |
|----------------------|----------------------------------------------------|
| `mowa run fajl.mowa` | Transpajlira i zapuskaje fajl                     |
| `mowa build`         | Sobrava vsi `.mowa` fajly v `dist/`               |
| `mowa init`          | Sozdava novi projekt iz šablona                   |
| `mowa watch`         | Nabljudaje izmenjenja v `src/` i avtomatično sobiraje |

## 📦 Start projekta

```bash
mowa init moj-projekt
cd moj-projekt
npm install
npm run build
npm run watch
npm start
```

## 📜 Primer `package.json`

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

## 📂 Oficijalno razširenje

```
*.mowa ← oficijalno razširenje fajlov za jazyk mowascript
```

## 🧐 Podržani jezyki

- Ukrajinsky
- Belorusky
- Rusky
- 🔀 Medžuslovjansky (čitaš ty ego sego 😉)

## 🔓 Licencija

Apache-2.0. Projekt je svobodny za ispolzovanje, prilagodženje i doprinos.

—
S ljubovju, za vsih Slovanov 🌍

- Telegram: [@rio_de_sich](https://t.me/rio_de_sich)
- [GitHub Issues](https://github.com/dmitrisi4/mowascript/issues) — za bagy i funkcije
- [Pull Requests](https://github.com/dmitrisi4/mowascript/pulls) — za izměny
