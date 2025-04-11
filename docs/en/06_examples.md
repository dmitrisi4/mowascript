[[🌀 Interslavic](../../06_examples.md) · [🌲 East Slavic](../east/06_examples.md)]

# 📦 MowaScript Code Examples

This file contains practical examples of MowaScript syntax usage — written in Ukrainian, Belarusian, Russian, and Interslavic variants.

---

## 🌀 Interslavic
```js
nechaj ime = "Svetoslav";
funkcija pozdravi(ime) {
	skazi("Dobrodošľ, " + ime + "!");
}

klas Kniga {
	konstruktor(nazev) {
		eto.nazev = nazev;
	}
}

izbor (x) {
    slucaj 1:
	govori("jedinica");
	konec;
	slucaj 2:
	govori("dvojka");
	konec;
	inace:
        govori("nepoznato");
}
```

---

## Ukrainian

### ✨ Variables
```mowa
нехай імʼя = "Діма";
конст місто = "Київ";
мур вік = 28;
```

### 🔄 Conditions
```js
якщо (вік > 18) {
  кажи("Дорослий");
} інакше {
  кажи("Дитина");
}
```

### 🔁 Loop
```js
для (нехай i = 0; i < 5; i = i + 1) {
	кажи("Лічильник: " + i);
}
```

### 📦 Modules
```js
імпортуй вітання з "./модулі/вітання.mowa";
експортуй функція вітай(хто) {
	кажи("Привіт, " + хто);
}
```

---

## Belarusian

### 🔤 Basic Structures
```js
канст імя = "Аляксей";
пакуль (счотчык < 3) {
	скажы("Цыкл...");
	счотчык = счотчык + 1;
}
```

### 🔤 Logic
```js
калі (возраст > 60) {
  скажы("Пэнсіянер");
} іначай {
  скажы("Працоўны");
}
```

---

## Russian

### 🔧 Functions & Classes
```js
функция привет(имя) {
	лог("Привет, " + имя + "!");
}

класс Пользователь {
	конструктор(имя) {
		это.имя = имя;
	}
}
```

---

## 🧮 Arrays and Methods
```js
нехай числа = [1, 2, 3, 4, 5];
нехай фільтровані = числа.адфільтруй(н => н % 2 == 0);
кажи(фільтровані);
```

---

## 🔀 Promises
```js
новий Обіцянка(виконати, відхилити) {
	якщо (успішно) {
		виконати("Все добре");
	} інакше {
		відхилити("Щось пішло не так");
	}
}
```

