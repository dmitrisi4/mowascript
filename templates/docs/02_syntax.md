[[🌲 East Slavic](east/02_syntax.md) · [🇺🇸 English](en/02_syntax.md)]

# 📐 Syntaks i Gramatika

MowaJS jest jezyk osnovany na JavaScript, no s syntaksom adaptovanym dlja slavjanskymi jezykami. Kod kompilirajet se v običny JavaScript i ostava se polno sovmestimy s JS ekosystemom.

---

Tabelka ključevoh slov JavaScript s odgovarajučimi formami v ukrajinskom, belaruskom, russkom i interslavjanskom. Možet byti ispolzovana za konstrukciju MowaJS transpajlera s podporom slavjanskogo syntaksa.

     
| JavaScript | 🌐 Interslavjansky  |Ukrajinska  |  Belaruska   | Russkij      |
|------------|---------------------|------------|--------------|--------------|
| `if`       | `ako`               |`якщо`      | `калі`       | `если`       |
| `else`     | `inako`             |`інакше`    | `іначай`     | `иначе`      |
| `switch`   | `izbor`             |`вибір`     | `выбар`      | `когда`      |
| `case`     | `sluсaj`            |`випадок`   | `выпадак`    | `случай`     |
| `default`  | `inace`             |`типово`    | `тыпова`     | `типово`     |
| `break`    | `prelom`            |`зупини`    | `спыні`      | `заверши`    |
| `for`      | `dla`               |`для`       | `для`        | `для`        |
| `while`    | `poka`              |`поки`      | `пакуль`     | `пока`       |
| `continue` | `канст`          |`продовж`   | `працягнуць` | `продолжи`   |
| `function` | `funkcija`          |`функція`   | `функцыя`    | `функция`    |
| `return`   | `vrati`             |`поверни`   | `вярнуць`    | `верни`      |
| `let`      | `nehaj`             |`нехай`     | `хай`        | `пусть`      |
| `const`    | `konst`             |`конст` | `канст`  | `конст`  |
| `var`      | `mur`               |`мур`       | `мур`        | `переменная` |

---

## 📦 Osnovna struktura

MowaJS podpora klasične konstrukcije:

- Změnnye: `nehaj`, `konst`, `mur`
- Uslovyje: `ako`, `inako`
- Cikly: `dla`, `poka`
- Funkcije: `funkcija`
- Klasy: `klasa`
- Logika: `i`, `abo`, `ne`
- Vrata: `vrati`

---

## 📚 Ključeva slova v raznyh jezykah

| JavaScript     | Ukrajinska | Belaruska    | Russkij      | 🌍 Interslavjansky |
|----------------|------------|--------------|--------------|--------------------|
| `var`          | `мур`      | —            | `переменная` | `mur`              |
| `let`          | `нехай`    | —            | `пусть`      | `nehaj`            |
| `const`        | `конст`    | `канст`      | `конст`      | `konst`            |
| `if`           | `якщо`     | `калі`       | `если`       | `ako`              |
| `else`         | `інакше`   | `іначай`     | `иначе`      | `inako`            |
| `while`        | `поки`     | `пакуль`     | `пока`       | `poka`             |
| `for`          | `для`      | `для`        | `для`        | `dla`              |
| `function`     | `функція`  | `функцыя`    | `функция`    | `funkcija`         |
| `return`       | `поверни`  | `вярнуць`    | `верни`      | `vrati`            |
| `break`        | `зупини`   | `спыніць`    | `останови`   | `prelom`           |
| `continue`     | `продовж`  | `працягнуць` | `продолжи`   | `prodolzi`         |
| `console.log`  | `кажи`     | `скажы`      | `лог`        | `govori`           |
| `true`         | `правда`   | `праўда`     | `истина`     | `istina`           |
| `false`        | `брехня`   | `хлусня`     | `ложь`       | `loz`              |
| `null`         | `нічого`   | `нічога`     | `ничего`     | `nicto`            |
| `this`         | `це`       | `гэта`       | `это`        | `se`               |

---

## 🧠 Kombinacija dialektov

V MowaJS možeš:

- Vybrati odin syntaks dlja vsogo projekta;
- ili kombinovati razne formy;
- ili sozdati sobstveny slovnik.

**Na primer:**
```js
funkcija privit() {
  ako (istina) {
    govori("Privit iz različnih světov!");
  }
}

ako (bal > 90) {
  govori("Otlično!");
} inako {
  govori("Možet byti lučše");
}
```

**🔁 Cikly:**
````
dla (nehaj i = 0; i < 5; i++) {
  govori(i);
}

poka (cislo > 0) {
  govori(cislo);
  cislo = cislo - 1;
}
````

**🔁 Struktury:**

Masyvy:
````
nehaj cisla = [1, 2, 3];
govori(cisla.dlina);
````

Objekty:
````
nehaj korisnik = {
  ime: "Olya",
  vik: 22
};
govori(korisnik.ime);
````

