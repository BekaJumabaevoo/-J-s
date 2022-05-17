// 1. const arr = [{ id: 1, name: 'Piter'}, { id: 2, name: 'Nina' }] выведите в консоль имя Нины

const arr = [
  { id: 1, name: "Piter" },
  { id: 2, name: "Nina" },
];

const user = arr.find((item) => item.id == 2);

console.log(user.name);

// 2. Вам дан массив, который представляет собой список квартир в доме. Каждый объект это квартира: ключ num - номер квартиры, floor - этаж и people - количество людей проживающих в квартире. Используя методы массива найдите те квартиры в которых проживает менее 3х человек и выведите массив с номерами таких квартир.

const house = [
  { num: 45, floor: 1, people: 2 },
  { num: 46, floor: 1, people: 2 },
  { num: 47, floor: 2, people: 6 },
  { num: 48, floor: 2, people: 3 },
  { num: 49, floor: 3, people: 1 },
  { num: 50, floor: 3, people: 4 },
  { num: 51, floor: 3, people: 1 },
  { num: 52, floor: 4, people: 2 },
  { num: 53, floor: 4, people: 5 },
];

const houseResult = house.filter((e) => e.people < 3);
const result = houseResult.map((e) => e.num);
console.log(result);

// 3. Дан массив Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const spliceMas = [1, 2, 3, 4, 5];
spliceMas.splice(3,  0,"a", "b", "c" );
console.log(spliceMas);

// 4. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const sliceMas = [1, 2, 3, 4, 5];
const sliceMas2 = sliceMas.slice(3);

console.log(sliceMas2);

// 5. let mas = [15, 'hello', 'trump', 23, 'world', 999, 176]; Дан массив. вывести в консоль строку которая разделена --- символами

const mas = [15, "hello", "trump", 23, "world", 999, 176];

const mas2 = mas.filter((item) => {
  return typeof item == "string";
});
console.log(mas2.join(" --- "));

