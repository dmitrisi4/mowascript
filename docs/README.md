# Headline

[[🌲 East Slavic](east/00_intro.md) · [🇺🇸 English](en/00_intro.md)]

# 🔰 Vvod (Uvod)

**MowaJS** jest experimentna programovatelna jezyk s prirodnym, slavjanskim syntaksom, ktory kompilirajet se v JavaScript.

Jejego cil je: približiti kod k ljudskoj movi dlja govoreči slavjanskih jezykov, i vse to bez zguba sily ekosystemy JavaScript.

---

## ✨ Što jest MowaJS?

MowaJS jest transpiler, ktory da vam možnost pisati kod s ukrajinskym, belaruskim, russkim ili interslavjanskim syntaksom. On konvertuje `.mowa` fajly v običny `.js` kod.

> Na primer:
> ```mowa
> funkcija privitati(ime) {
>   drukuj("Privit, " + ime);
> }
> ```
>
> Kompilirajet se v:
> ```js
> function privitati(ime) {
>   console.log("Privit, " + ime);
> }
> ```

---

## 🎯 Cil projekta

- Davati možnost pisati kod na rodnom jezyku.
- Izslědovati kak prirodna mova vlivajet na logiku i stil kodovanja.
- Sozdat most meždu kulturami i jezykami čerez syntaks.
- Za veselje 🍄

---

## 🧭 Začemu JavaScript?

- JavaScript jest osnova modernogo weba.
- Velika ekosystema (npm, brauzery, Node.js).
- Lako se integruje s sušče projekty.
- MowaJS ne zaměnjuje JS — to je nadstavka s novym "glasom".

---

## 🌍 Kto može użyvati to?

- Novočnjaki, ktorym trudno učiti anglijsky syntaks.
- Učitelje, ktory hotě objašnjati kod prirodno.
- Kodery interesujęči se za jezyky, syntaks i DSL.
- Ljubitelji experimentalnyh jezykov programovanja.

---

## 🚀 Status projekta

- [x] Podpora osnovnyh konstrukcij (`ako`, `inako`, `dokud`, `funkcija`, `govori`)
- [x] Kompilacija v JavaScript
- [x] npm-paket `mowa`
- [ ] Podpora vseh slavjanskyh dialektov
- [ ] Gluboka integracija s typami / TypeScript
- [ ] Interaktivny playground
- [ ] Web-redaktor

---

## 🛠️ Priklady

```mowa
funkcija kvadrat(čislo) {
  vrati čislo * čislo;
}

drukuj(kvadrat(5));
```

