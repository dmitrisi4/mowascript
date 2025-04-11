[[🌲 East Slavic](east/01_philosophy.md) · [🇺🇸 English](en/01_philosophy.md)]

# 🧭 Filosofija MowaJS

MowaJS ne jest prosto syntaktičny cukor. To jest pokušanje pereosmišljanja, kak možemo programovati ispolzovajuči jezyk, ktory jest intuitivno blizky — jezyk, ktory zvuči poznatelno.

---

## 🧠 Programovanje jest myšljenje

Kogda programujemo, my formulujemo mysli v abstraktnoj forme. No počemu one dolžet byti tolko na anglijskom? MowaJS dava vozmožnosť programovati na jezyku, na kotorym myslite.

---

## 🎯 Glavne principy

### 1. **Prirodnosť**
MowaJS stremi byti što bližejši do prirodne, govorimoj movy. Ne treba učiti iskusstvenyje sokračenja — tolko znamo-slova i struktury.

```mowa
poka (ne gotovo) {
  čekaj();
}
```

### 2. **Jasnosť**
````mowa
ako (vik >= 18) {
  govori("Povnolitnyj");
} inako {
  govori("Još ne");
}
````

### 3. **Adaptivnosť jezyka**
Podpora vseh slavjanskyh variantov.

### 4. **Ne zaměna, a adaptacija**
MowaJS ne zaměnjuje JavaScript — ono samo dava novu formu. Po kompilaciji vi imajete validny `.js` kod.

### 5. **Gibkosť**
Sami vybirajete, koliko rodnyj bude jezyk vašego koda. Možte pisati celkom na ukrajinskom, ali směšavati s JavaScriptom ili drugim slavjanskim jezykom. Podpora aliasov za ključe slova dava bolju udobnosť.

````js
konst maks = maksimum(5, 9, 2);

ako (maks > 5) {
	govori("Veliko značenje");
} inako {
	console.log("Malo");
}

mur cislo = 10;

poka (cislo > 0) {
	govori("Cislo: " + cislo);
	cislo = cislo - 1;
}

funkcija obrabotka(dani) {
	ako (dani.soderzi("error")) {
		govoriGreska("Obnaružena greška!");
	} inako {
		govori("Vsjo dobro ✅");
	}
}

nehaj cislo = 5;

ako (cislo > 0) {
	govori("Cislo jest pozitivno");
} inako {
	govori("Cislo ne jest pozitivno");
}
````