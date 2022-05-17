// 1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
// let a = 10
// let b = 3
// console.log(a % b)

// 2. Возведите 2 в 10 степень. Результат запишите в переменную st. 

// $st = (2 ** 10)
// console.log($st)

// 3. Имеется три переменные a = 1, b = 2, c = " белых медведей". Сложите переменные так, чтобы в результате получилось выражение: "12 белых медведей". 

// let a = 1
// let b = 2
// let c = 'белых медведей';

// console.log(a + ('') + b + (" ") + c)

// 4. Запустив следующий код, вы получите число 16. Что нужно изменить, чтобы получить число 15? let a = 5; let b = 10, let c ; c = ++a + b--; 

let a = 10
let b = 5
let c = ++a + b--
console.log(1 + a + b - 1)

// 5. Запустив следующий код, вы получите число 30. Ваша задача расставить приоритетные скобки () так, чтобы получить число -390. const x = 15 * 4 + 25 - 55; 

// x = 15 * (4 + 25) - (55);
// console.log(-x)



let i = 0
do {

    console.log(i)
    ++i 
}
while(i <= 10) {
}

for (let i = 0; i < 100; i = i + 2) {
    console.log(i)
}
let str = '';
for (i = 0; i <= 20; ++i ){

 console.log(str = str + "a")
}


let array = [0,10,20,30,40,50,60,70,80,90];array.length;
let sum = 0

for (let i = 0; i < array.length; i++){
    if (typeof array[i] === string){
        continue
    }
sum += array[i]
if (i+1== array.length){
    console.log(sum / i)
}

    }
        
