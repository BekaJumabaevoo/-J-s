// 1. Создайте ассоциативный массив (объект) заработных плат obj. Напишите зарплату для Коли, Пети, Васи, Анны и Виктории. Выведите на экран зарплаты Пети и Коли.

let obj = {
  Коля: "1500",
  Петя: "2000",
  Вася: "500",
  Анна: "1000",
  Виктория: "2500",
};
console.log(`Зарплата Пети ${obj.Петя}`);
console.log(`Зарплата Коли ${obj.Коля}`);

// 2. Используя предыдущий объект Запишите  в него нового сотрудника и удалите Васю.

delete obj.Вася;
obj.Кама = "1750";
console.log(obj);

// 3. Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

// let obj = {
//     Коля: '1500',
//     Петя: '2000',
// }
// console.log(`Зарплата Пети ${obj.Петя}`)
// console.log(`Зарплата Коли ${obj.Коля}`)

// 4. Дан объект {js:['jQuery', 'Angular', 'React', 'Vue'], html: '<div>hello world</div>', css: 'color: red;'}. Создайте геттер который выведет в консоль предложение "Я изучаю Web технологии. Я уже изучил HTML и CSS. HTML выгдядит так - <div>hello world</div>, а CSS выглядит так - 'color: red'. Так же я изучаю JavaScript. В дальнейшем я изучу такие технологии как jQuery, Angular, React, Vue".

let user = {
  js: ["jQuery", "Angular", "React", "Vue"],
  html: "<div>hello world</div>",
  css: "color: red",
};

Object.defineProperty(user, "fullUser", {
  get: () => {
    return `Я уже изучил HTML и CSS. HTML выгдядит так - ${user.html}, а CSS выглядит так -  ${user.css}. Так же я изучаю JavaScript. В дальнейшем я изучу такие технологии как  ${user.js}. `;
  },
});

console.log(user.fullUser);

// 5. Создайте объект кошки с рядом свойств. например именем, цвет глаз, цвет шерсти, вес и так далее. напишите метод который проверяет, если кошка голодна, то выведет текст "Кыс Кыс {Имя кошки}. Идем кушать" и после этого меняет значение свойства голода. Так же создайте сеттер который принимает параметр love. И если он = true то измените параметр happy на противоположный.

let cat = {
  name: "Malina",
  eyeColor: "blue",
  woolColor: "gray",
  weight: 9,
  hunger: true,
  love: true,
  happy: false,

  isHungry: () => {
    if (cat.hunger) {
      cat.hunger = false;
      console.log(`Кыс Кыс ${cat.name}. Идем кушать`);
      console.log(cat);
    }
  },
  set isHappy(love) {
    if (love) {
      cat.happy = !cat.happy;
      console.log(cat);
    }
  },
};
cat.isHappy = true;
