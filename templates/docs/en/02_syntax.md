[[🌀Interslavic](../02_syntax.md)[🌲 East Slavic](../east/02_syntax.md)]


# ✍️ Syntax and Grammar

MowaJS is a language built on top of JavaScript, but adapted to Slavic-language syntax. The code compiles to regular JavaScript and remains fully compatible with the JS ecosystem.

---

This table shows JavaScript keywords with equivalents in Ukrainian, Belarusian, Russian, and Interslavic. It can be used to create the MowaJS transpiler which supports Slavic-style syntax.

| JavaScript |  Ukrainian     |  Belarusian       |  Russian           | 🌐 Interslavic |
|------------|--------------------|-----------------------|----------------------|-----------|
| `if`       | `якщо`             | `калі`                | `если`               | `ako`     |
| `else`     | `інакше`           | `іначай`              | `иначе`              | `inako`   |
| `else if`  | `інакше якщо`      | `іначай калі`         | `иначе если`         | `inako ako` |
| `switch`   | `вибір`            | `выбар`               | `когда`              | `izbor`   |
| `case`     | `випадок`          | `выпадак`             | `случай`             | `sluсaj`  |
| `default`  | `типово`           | `тыпова`              | `типово`             | `inace`   |
| `break`    | `зупини`           | `спыні`               | `заверши`            | `konec`   |
| `for`      | `для`              | `для`                 | `для`                | `dla`     |
| `while`    | `поки`             | `пакуль`              | `пока`               | `poka`    |
| `do`       | `виконати`         | `выканаць`            | `выполнить`          | `delay`|
| `continue` | `продовж`          | `працягнуць`          | `продолжи`           | `канст` |
| `function` | `функція`          | `функцыя`             | `функция`            | `funkcija` |
| `return`   | `поверни`          | `вярнуць`             | `верни`              | `vrati`   |
| `let`      | `нехай` / `хай`    | `хай`                 | `пусть`              | `nehaj`   |
| `const`    | `конст`        | `канст`           | `конст`          | `konst`   |
| `var`      | `мур`              | `мур`                 | `переменная`         | `mur`     |

---

## 📦 Basic Structure

MowaJS supports classical programming constructs:

- Variables: `нехай`, `канст`, `пусть`, `let`, `mur`
- Conditions: `якщо`, `if`, `если`, `ako`, `калі`
- Loops: `для`, `поки`, `дла`, `пакуль`, `while`
- Functions: `функція`, `функция`, `funkcija`, `функцыя`
- Classes: `клас`, `class`, `класс`, `klasa`
- Logic: `і`, `або`, `не`, `&&`, `||`, `!`
- Returns: `поверни`, `верни`, `vrati`, `вярнуць`

---

## 📚 Keywords Across Languages

| JS            | Ukrainian   | Belarusian | Russian      | 🌍 Interslavic |
|---------------|-------------|----------------|--------------|----------------|
| `var`         | `мур`       | —              | `переменная` | `mur`          |
| `let`         | `нехай`     | —              | `пусть`      | `nehaj`        |
| `const`       | `конст` | `канст`    | `конст`  | `konst`    |
| `if`          | `якщо`      | `калі`         | `если`       | `ako`          |
| `else`        | `інакше`    | `іначай`       | `иначе`      | `inako`        |
| `while`       | `поки`      | `пакуль`       | `пока`       | `poka`         |
| `do`          | `роби`      | `рабіць`       | `делай`      | `delaj`        |
| `for`         | `для`       | `для`          | `для`        | `dla`          |
| `function`    | `функція`   | `функцыя`      | `функция`    | `funkcija`     |
| `return`      | `поверни`   | `вярнуць`      | `верни`      | `vrati`        |
| `break`       | `зупини`    | `спыніць`      | `останови`   | `prekrati`     |
| `continue`    | `продовж`   | `працягнуць`   | `продолжи`   | `prodolzi`     |
| `console.log` | `кажи`      | `скажы`        | `лог`        | `govori`       |
| `true`        | `правда`    | `праўда`       | `истина`     | `istina`       |
| `false`       | `брехня`    | `хлусня`       | `ложь`       | `loz`          |
| `null`        | `нічого`    | `нічога`       | `ничего`     | `nicto`        |
| `this`        | `це`        | `гэта`         | `это`        | `se`           |

---

## 🧠 Mixing Dialects

In MowaJS you can:

- choose a single dialect for the whole project,
- or freely mix them together,
- or even define a custom dictionary.

**Example:**
```js
funkcija privit() {
  якщо (правда) {
    govori("Привіт із різних світів!");
  }
}

якщо (бал > 90) {
  кажи("Відмінно!");
} інакше {
  скажы("Можна краще");
}
```

**🔁 Loop examples:**
````js
для (нехай i = 0; i < 5; i++) {
  govori(i);
}

пакуль (число > 0) {
  лог(число);
  число = число - 1;
}
````

**🔁 Structures:**

Arrays:
````js
нехай числа = [1, 2, 3];
govori(числа.довжина);
````

Objects:
````js
нехай користувач = {
  імʼя: "Оля",
  вік: 22
};
govori(користувач.імʼя);
````