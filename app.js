//1. Население Bishkek City равняется 2000000 жителей. Население New Balykchy равняется 1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами. - 10 баллов.

// const differens = (peopleOfBishkekCity, peopleOfNewBalykchy) =>
//   peopleOfBishkekCity - peopleOfNewBalykchy;

// console.log(differens(2000000, 1000));

//2. В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет.

// //площадь двора
// const areaLength = 50;
// const areaWidth = 30;
// const totalArea = areaLength * areaWidth;

// //площадь дома
// const houseLength = 20;
// const houseWidth = 10;
// const houseArea = houseLength * houseWidth;

// const freeArea = totalArea - houseArea;

// console.log("FreeArea: " + freeArea);

//3. В браузере запрашиваются два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. После этого компьютер должен вывести alert ЗАДАЧА РЕШЕНА.

// let num = +prompt("Enter a number");
// let num2 = +prompt("Enter another number");

// if (num > num2) {
//   alert(num + num2);
// } else {
//   alert(num * num2);
// }

// alert(" ЗАДАЧА РЕШЕНА.");

//4. Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет?

let ageDragon = +prompt("Write dragon's age?");
let headDragonBeforeHundYear = 3;
let headDragonAfterHundYear = 2;
let eyesDragon = 2;

if (ageDragon < 100) {
  alert(
    `Dragon has ${ageDragon * headDragonBeforeHundYear} head and ${
      ageDragon * eyesDragon
    } eyes.`
  );
} else if (ageDragon >= 100) {
  alert(
    `Dragon has ${ageDragon * headDragonAfterHundYear} head and ${
      ageDragon * eyesDragon
    } eyes.`
  );
} else {
  alert("Hi, I'm Daenerys! Write my age :)");
}

//5. Пусть браузер, узнав возраст человека, дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!".

// const age = +prompt("Сколько вам лет?");
// if (age > 17) {
//   prompt("В каком институте ты учишься?");
//   alert("Хороший институт");
// } else if (age <= 17) {
//   prompt("В какой школе ты учишься?");
//   alert("Неплохая школа");
// }
// alert("До следующей встречи!");
