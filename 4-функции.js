// 1. Создайте функцию которая высчитывает площадь прямоугольника. S = a * b;

function sum(a, b) {
  let S = a * b;
  return S;
}
console.log(sum(5, 15));

// 2. Создайте функцию которая спрашивает ваше имя и возраст. если ваше имя не равно пустой строке или null то выведите его в предложении "Меня зовут (ваше имя). Мне (ваш возраст) лет.

let checkName = prompt("Имя", "");
let checkAge = prompt("Возраст", "");

function checkBio(name, age) {
  if (name && age) {
    alert(`Меня зовут ${checkName}, мне ${checkAge} лет`);
  } else {
    alert(`Пусто`);
  }
}
checkBio(checkName, checkAge);

// 3. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function calc(first, second) {
  if (first % 2 == 0 && second % 2 == 0) {
    return first * second;
  } else if (first % 2 == 1 && second % 2 == 1) {
    return first + second;
  } else if (first % 2 == 1 && second % 2 == 0) {
    return first;
  } else if (first % 2 == 0 && second % 2 == 1) {
    return second;
  }
}
console.log(calc(14, 4));

// 4. Создайте функцию getTidyClothes которая принимает 2 аргумента (цвет белья и порошок котором вы стираете- название). если цвет = "black" то выведите "Я стираю черное белье порошком (название порошка), если "white" - то должно выйти "Я стираю белое белье с порошком (название порошка). Если любой другой цвет то "я стираю цветное белье".

function getTidyClothes(color, powder) {
  if (color == "black") {
    return `Я стираю черное белье порошком ${powder}`;
  } else if (color == "white") {
    return `Я стираю белое белье порошком ${powder}`;
  } else {
    return `Я стираю цветное белье`;
  }
}
console.log(getTidyClothes("white", "Fery"));

// 5. Напишите 2 функции. Первая перебирает массив из чисел [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,6,7,8,9,10] и возвращает только целые числа ( как найти целое число в JavaScript можете найти в интернете). вторая принимает то что вернула первая функция и умножает каждое число на 2. ответ выводит в консоль);




let arr = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,6,7,8,9,10]

function sortArray(array){
  let acc = [];

  for(let n of array){
    Number.isInteger(n) && acc.push(n)
  }
  return acc;
}
console.log(sortArray(arr))

function multiplyElement(array){
  let acc = [];

  for(let n of array) {
    Number.isInteger(n) && acc.push(n * 2)
  }
  return acc;
}
console.log(multiplyElement(arr))
