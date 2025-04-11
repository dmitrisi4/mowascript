[[🌲 East Slavic](east/03_stdlib.md) · [🇺🇸 English](en/03_stdlib.md)]

# 📚 Standardna biblioteka

MowaJS dava udobne, čitljive aliasy (obgortky) dlja standardnyh API JavaScript. To pozvoljajet rabotati s masyvami, objektami, matematikoj, vyvodom v konzol i drugymi funkcionaľnostjami — na prirodnom, razumljivom jezyku.

---

## 🖨️ Vyvod v konzolu

| JavaScript       | MowaJS                         |
|------------------|--------------------------------|
| `console.log`    | `govori`                       |
| `console.error`  | `govoriGreska`                 |
| `console.warn`   | `govoriVnimanje`               |
| `console.info`   | `govoriInfo`                   |

```mowa
govori("Pozdrav svijete");
govoriGreska("Ups...");
```

---

## 🧮 Matematika (Math)
| JavaScript     | MowaJS         |
|----------------|----------------|
| `Math.abs()`   | `absolutno()`  |
| `Math.max()`   | `maksimum()`   |
| `Math.min()`   | `minimum()`    |
| `Math.pow()`   | `vStepenu()`   |

```js
nehaj a = -5;
govori(absolutno(a));
govori(maksimum(3, 8, 2));
```

---

## 🔁 Konverzija tipov

| JavaScript         | MowaJS             |
|--------------------|--------------------|
| `JSON.stringify()` | `vStroku()`        |
| `JSON.parse()`     | `izStroki()`       |
| `Array.isArray()`  | `jeArray()`        |
| `Number()`         | `Cislo()`          |
| `String()`         | `Stroka()`         |
| `Boolean()`        | `Logicno()`        |

```js
govori(vStroku({ jezyk: "mowa" }));
```

---

## 📦 Masyvy: metody

| JavaScript     | MowaJS                 |
|----------------|------------------------|
| `.length`      | `.dlina`               |
| `.includes()`  | `.soderzi()`           |
| `.split()`     | `.razdeli()`           |
| `.join()`      | `.sojedini()`          |
| `.concat()`    | `.sojediniMassivy()`   |

---

## 🔁 Obrabotka masyvov

| JavaScript    | MowaJS                  |
|---------------|-------------------------|
| `.filter()`   | `.filtruj()`            |
| `.map()`      | `.mapuj()`              |
| `.find()`     | `.najdi()`              |
| `.forEach()`  | `.dlaKazdogo()`         |
| `.push()`     | `.dobavi()`             |
| `.pop()`      | `.izvleki()`            |
| `.shift()`    | `.iznacaloUdalj()`      |
| `.unshift()`  | `.vnacaloDodaj()`       |
| `.indexOf()`  | `.najdiIndeks()`        |

```js
nehaj masyv = [1, 2, 3, 4];
nehaj parny = masyv.filtruj((cislo) => cislo % 2 == 0);
parny.dlaKazdogo((n) => govori(n));
```

---

## 📦 Obecanja (Promises)

| JavaScript     | MowaJS               |
|----------------|----------------------|
| `Promise`      | `Obecanje`           |
| `.then()`      | `.togda()`           |
| `.catch()`     | `.lovi()`            |
| `.finally()`   | `.vKoncu()`          |
| `.resolve()`   | `.ispolni()`         |
| `.reject()`    | `.otkloni()`         |

```js
nehaj zagravka = novy Obecanje((ispolni, otkloni) => {
  ispolni("OK");
});

zagravka.togda((rezultat) => govori(rezultat));
```

---

## 🧪

| JavaScript     | MowaJS          |
|----------------|-----------------|
| `typeof`       | `tip`           |
| `instanceof`   | `jeEksemplar`   |

