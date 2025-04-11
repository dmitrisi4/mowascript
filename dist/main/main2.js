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
    console.info("Завяршэнне");
  });


  const лічбы = [1, 2, 3, 4, 5];

  const фільтраваныя = лічбы.filter((н) => {
    return н % 2 == 0;
  });

  console.log(фільтраваныя);