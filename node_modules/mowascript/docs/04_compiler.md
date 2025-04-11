[[🌲 East Slavic](east/04_compiler.md) · [🇺🇸 English](en/04_compiler.md)]

# ⚙️ Arhitektura kompilatora MowaJS

Kompilator (ili transpajler) MowaJS konvertuje kod napisan na razumlivom slavjanskom jezyku v validny JavaScript. On poddržava mnogojezyčny ključe-slova, gibku konfiguraciju, transformaciju syntaksa i može ispolzovati se kak CLI ili biblioteka.

---

## ⚙️ Etapy roboty kompilatora

```text
┌────────────┐
│  Vhodnyj   │     (.mowa kod)
│   kod      │
└────┬───────┘
     │
     ▼
┌────────────┐
│  Lekser    │     (raspoznava tokeny)
└────┬───────┘
     │
     ▼
┌────────────┐
│  Parser    │     (strojit AST — derevo)
└────┬───────┘
     │
     ▼
┌────────────────────┐
│ Translyator/Transformer │  (konvertuje AST v JS AST)
└────┬───────────────┘
     │
     ▼
┌────────────┐
│ Generator  │     (output .js fajla)
└────────────┘
```

---

Kompilator osnovuje se na slovnikah ključe-slova:

- Ukrajinsky (ua.js)
- Belarusky (by.js)
- Russky (ru.js)
- Interslavjansky (isv.js)
- i drugi…

Vo vremi parsyvanja on sravnjava slova iz koda s izvestnymi slovnikami i avtomatično mapuje jih na JS ključe ili API-metody.

```json
{
  "ako": "if",
  "poka": "while",
  "dodajKStroku": {
    "target": "concat",
    "type": "string"
  }
}
```

---

## 🌳 Konstrukcija AST (Abstract Syntax Tree)

MowaJS strojit AST-derevo so vnimanjem k perevodu:

```js
ako (vik >= 18) {
  govori("Vzrastyj");
}
```

Transformuje se v:

```js
if (vik >= 18) {
  console.log("Vzrastyj");
}
```

---

## 🔄 Transformacija

Glavne etapy:

- Alias → JS keyword: `funkcija` → `function`
- Metody → API: `govori()` → `console.log()`
- Logika → simvoly: `i` → `&&`, `abo` → `||`
- Podpora dialektov čerez slovnik

---

## 💡 Vozmožnosti

- ✅ Multisyntaks
- ✅ Kastomny slovniki
- ✅ CLI komandy: `mowa build`, `mowa run`
- ⏳ Linting + syntax highlight (v razvitku)
- ⏳ Playground (skoro)

---

## 🔮 Budućnost

- Linting osnovany na AST + sovety
- Live-redaktor v brauzeri
- Integracija s redaktory (VSCode, WebStorm)
- Preprocessing šablonov
- Podpora TypeScript tipov
