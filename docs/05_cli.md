[[🌲 East Slavic](east/05_cli.md) · [🇺🇸 English](en/05_cli.md)]

# 🛠️ Komandnyj interfejs MowaJS (CLI)

MowaJS prihodit s vstrojenym CLI, kotoryj da vozmožnosť bystro zapustiti, kompilovati, sledovati fajly i inicializovati projekty s `.mowa` fajlami.

---

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

---

## 🔧 Komandy CLI

### `mowa init <ime_projekta>`
Inicializuje novy projekt so startovoj strukturoj i šablonami:

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

🧩 Sozdajet se `package.json`, kopirujut se šablony, dobavljajut se zavisimosti.

---

### `mowa build`
Kompiliruje vse `.mowa` fajly iz `src/` v `.js` fajly v `dist/`.

- Čitajet vse `.mowa` fajly iz `src/`
- Transpajlit ih v JavaScript
- Sohranjaet rezultat v `dist/` s toj že strukturoj

---

### `mowa run <fajl.mowa>`
Zapuskajet `.mowa` fajl neposredno:

- Transpajlit v JavaScript
- Vyvodit JS kod v konzolu
- Ispolnjajet čerez `eval`

---

### `mowa watch`
Režim nabludenja:

- Nabljudajet vse `.mowa` fajly v `src/`
- Avtomatično kompilirujet pri izmenenii
- Udaliajet `.js` esli `.mowa` byl udalen

Poljezno vo vremi razrabotki — ne nado rucno zapuskat' `build` každyj raz.

---

## 📄 Pod kapotom
CLI realizovan v fajle `mowa.js`. Glavnye časti:

- `initProject()` — sozdajet strukturu i `package.json`
- `buildProject()` — kompiliruet `.mowa` → `.js`
- `runFile()` — zapuskaet odin fajl čerez `eval`
- `watchProject()` — režim nabludenja i avtomatična transpilyacija

---

## 🧠 Sovety
- Ispolzuj `mowa watch` pri razrabotke
- Piši kod v `src/`, rezultaty budut v `dist/`
- Dobavi `npm run build` v `scripts` dlja udobstva

---

## ⛓ Primer `package.json` posle `init`

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

Tento CLI jest srce MowaJS. On dela zapusk, sborku i inicializaciju maksimalno udobnymi — a tvoj opyt maksimalno slavjanskym ❤️

