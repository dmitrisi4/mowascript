[[🌀Interslavic](../../01_philosophy.md) · [🌲 East Slavic](../east/01_philosophy.md)]


# 🧭 Philosophy of MowaJS

MowaJS is more than just syntactic sugar. It's a rethinking of how we can write code using language that feels intuitive and familiar — a language that sounds like home.

---

## 🧠 Programming is Thinking

When we code, we express our thoughts in abstract form. But why should those thoughts be only in English? MowaJS lets you code in the language you think in.

---

## 🎯 Core Principles

### 1. **Natural Expression**
MowaJS strives to be as close to natural, spoken language as possible. No artificial abbreviations — just words and structures that feel familiar.

```mowa
поки (не готово) {
  чекати();
}
```

### 2. **Clarity**
````mowa
якщо (вік >= 18) {
  друкувати("Повнолітній");
} інакше {
  друкувати("Ще ні");
}
````

### 3. **Language Adaptability**
Support for all Slavic variants.

### 4. **Linguistic Flexibility**
MowaJS doesn’t try to replace JavaScript — it adapts it into a new form. After compilation, you get fully valid, standard `.js` code.

### 5. **Freedom of Style**
You choose how native your code sounds. Write fully in Ukrainian, or mix it with JS or other Slavic styles. Support for aliases makes the language comfortable and expressive.

````js
канст maks = maksimum(5, 9, 2);

калі (maks > 5) {
  скажы("Вялікае значэнне");
} інакше {
  console.log("Малае");
}

мур число = 10;

пакуль (число > 0) {
	скажы("Лічба: " + число);
	число = число - 1;
}

funkcija obrabotka(dani) {
	ako (dani.soderži("error")) {
		скажыПамылка("Знойдзена памылка!");
	} інакше {
		govori("Все добре ✅");
	}
}

пусть число = 5;

если (число > 0) {
	лог("Число положительное");
} иначе {
	лог("Число не положительное");
}
````