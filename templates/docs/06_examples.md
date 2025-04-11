[[🌲 East Slavic](east/06_examples.md) · [🇺🇸 English](en/06_examples.md)]

# 📦 Prikłady koda v MowaScript

Tento fajl pokazuje praktične prikłady ispolzovanija jazykovyh konstrukcij v MowaScript — na ukrajinskom, belaruskom, russkom i medžuslavjanskom (interslavic).

---

## 🌀 Interslavic
```js
nehaj ime = "Svetoslav";
funkcija pozdravi(ime) {
	govori("Dobrodošľ, " + ime + "!");
}

klasa Kniga {
	konstruktor(nazev) {
		se.nazev = nazev;
	}
}

izbor (x) {
  slucaj 1:
    govori("jedinica");
    prelom;
  slucaj 2:
    govori("dvojka");
    prelom;
  inace:
    govori("nepoznato");
}

// logika
ako (x > 10 i x < 100) {
  govori("x je v intervale");
} inako {
  govori("x je vne intervala");
}

// cikl
dla (nehaj i = 0; i < 3; i = i + 1) {
  govori("iteracija: " + i);
}

// masyv i metod
nehaj lista = [1, 2, 3, 4];
nehaj suma = 0;
lista.dlaKazdogo((cislo) => {
  suma = suma + cislo;
});
govori("Suma: " + suma);

// obicjanka
nehaj zagravka = novy Obecanje((ispolni, otkloni) => {
  ako (istina) {
    ispolni("Uspjeh!");
  } inako {
    otkloni("Neuspjeh...");
  }
});

zagravka.togda((rezultat) => govori(rezultat));
```

---

##  Ukrajinska

### ✨ Zminni
```mowa
нехай імʼя = "Діма";
конст місто = "Київ";
мур вік = 28;
```

### 🔄 Umovy
```js
якщо (вік > 18) {
  кажи("Дорослий");
} інакше {
  кажи("Дитина");
}
```

### 🔁 Cikł
```js
для (нехай i = 0; i < 5; i = i + 1) {
	кажи("Лічильник: " + i);
}
```

### 📦 Moduli
```js
імпортуй вітання з "./модулі/вітання.mowa";
експортуй функція вітай(хто) {
	кажи("Привіт, " + хто);
}
```

---

##  Belaruska

### 🔤 Asnoŭnyje struktury
```js
канст імя = "Аляксей";
пакуль (счотчык < 3) {
	скажы("Цыкл...");
	счотчык = счотчык + 1;
}
```

### 🔤 Logika
```js
калі (возраст > 60) {
  скажы("Пэнсіянер");
} іначай {
  скажы("Працоўны");
}
```

---

##  Russkij

### 🔧 Funkcii i klasy
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

## 🧮 Masyvy i metody
```js
нехай числа = [1, 2, 3, 4, 5];
нехай фільтровані = числа.адфільтруй(н => н % 2 == 0);
кажи(фільтровані);
```

---

## 🔀 Obicjanki (Promises)
```js
новий Обіцянка(виконати, відхилити) {
	якщо (успішно) {
		виконати("Все добре");
	} інакше {
		відхилити("Щось пішло не так");
	}
}
```

