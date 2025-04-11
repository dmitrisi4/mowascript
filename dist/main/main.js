var імя = "Дзіма";
console.log("Прывітанне, " + імя + "!");

if (імя == "Дзіма") {
  console.log("Ты аўтар моваскрыпта!");
} else {
  console.log("Хто ты?");
}

const адказ = new Promise((resolve, reject) => {
  return("Усё гатова!");
});

адказ
  .then((вынік) => {
    console.log("Вынік: " + вынік);
  })
  .catch((памылка) => {
    console.error(памылка);
  })
  .finally(() => {
    console.info("Завяршэнне 1");
  });


  const лічбы = [1, 2, 3,2, 4,2, 5, 4];

  const фільтраваныя = лічбы.filter((н) => {
    return н % 2 == 0;
  });

  console.log(фільтраваныя);

// Украинский (mowa-ua)

  function привітання(імʼя) {
    console.log("Привіт, " + імʼя + "!");
  }

  let імена = ["Андрій", "Оля", "Марко"];

  імена.forEach((імʼя) => {
    привітання(імʼя);
  });

  // Белорусский (mowa-by)
  function прывітанне(імя) {
    console.log("Прывітанне, " + імя + "!");
  }

  let імены = ["Янка", "Настасся", "Кастусь"];

  імены.forEach((імя) => {
    прывітанне(імя);
  });

  ///Русский (mowa-ru)
  function приветствие(имя) {
    console.log("Привет, " + имя + "!");
  }

  let имена = ["Ваня2", "Катя", "Петя"];

  имена.forEach((имя) => {
    приветствие(имя);
  });

// (mowa-isv)
  function pozdrav(ime) {
    console.log("Zdravstvuj, " + ime + "!");
  }

  let imena = ["Milan", "Lena", "Radek"];

  imena.dlaKaždogo((ime) => {
    pozdrav(ime);
  });

let вік = 222;

if (вік >= 18) {
  console.log("Доступ дозволено");
} else {
  console.log("Доступ заборонено");
}

let узрост = 2222314;

if (узрост >= 18) {
  console.log("Доступ дазволены");
} else {
  console.log("Доступ забаронены");
}

let vozrast = 20;

jakli (vozrast >= 18) {
  console.log("Dostup je dovolen");
} inakše {
  console.log("Dostup je zapreščen");
}

let Promise = new Promise((resolve, reject) => {
  resolve("Всё хорошо");
});

Promise
  .then((рез) => console.log(рез))
  .catch((console.error) => console.error(ошибка));

  let Promise = new Promise((resolve, reject) => {
    resolve("Vsě je v porjadku");
  });

  Promise
    .then((rezultat) => console.log(rezultat))
    .pojmi((greška) => govoriGreška(greška));

