//1
//let user = {};

//function isEmpty(obj) {
//  for (let key in obj) {
//    return false;
//  }
//  return true;
//}

//console.log(isEmpty(user));

//2
//let fruits = {
//  apple: 2,
//  peach: 3,
//  blabla: 'Василь',
//};


//function multiplyNumeric(obj) {
//  for (let key in obj) {
//    if (typeof obj[key] == 'number') {
//      obj[key] *= 2;
//      console.log(obj[key]);
//    }
//  }
//}
//multiplyNumeric(fruits);

//3
//function readNumber() {
//  let num;

//  do {
//     num = prompt("Введіть число");
//  } while ( !isFinite(num) );

//  if (num === null || num === '') {
//    return null;
//  } 

//  return +num;
//}

//alert(`Число: ${readNumber()}`);

//4
//function random(min, max) {
//  return min + Math.random() * (max - min);
//}

//console.log(random(3, 8));


//5
//function randomInteger(min, max) {
//  let num = min + Math.random() * (max + 1 - min);
//  return Math.floor(num);
//}

//console.log(randomInteger(1, 8));

//6
//function ucFirst(str) {
//  if (typeof str === 'string') {
//    let word = str[0].toUpperCase();
//    for (let i = 1; i < str.length; i++) {
//      word += str[i];
//    }
//    console.log(word);
//  }
//}

//ucFirst('Василь');

//7
//function checkSpam (str) {
//  let lowerWord = str.toLowerCase();
//  if (lowerWord.includes('viagra') || lowerWord.includes('xxx')) {
//    return true;
//  } else {
//    return false;
//  }
//}
//console.log(checkSpam('buy ViAgRA now'));
//console.log(checkSpam('free xxxxx '));
//console.log(checkSpam("innocent rabbit"));

//8
//function truncate(str, maxlength) {
//  if (str.length > maxlength) {
//    return str.slice(0, maxlength - 1) + ' ...';
//  } else {
//    return str;
//  }
//}
//console.log(truncate ("Ось що мені хотілося б сказати на цю тему:", 20));
//console.log("Усім привіт!", 20);

//9
//function extractCurrencyValue(str) {
//  let num = str.slice(1, str.length);
//  return +num;
//}

//console.log(extractCurrencyValue('$120') === 120);

//10
//function sumInput() {
//  let arr = [];

//  while(true) {
//    let num = prompt('Введіть число');
//    if (num === "" || num === null || !isFinite(num)) break;
//    arr.push(+num);
//  }

//  let sumArr = 0;

//  for (let i of arr) {
//    sumArr += i;
//  }

//  return sumArr;
//}
//alert(sumInput());

//11
//checkAge(age = prompt('скільки Вам років?'));

//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  }

//  return confirm(' Батьки дозволили ?'); //Не обовєязково. Тому, що якщо умова if хибна все одно буде виконуватися return, і після виконання зупинить роботу функції.
//}

//alert(checkAge(age));

//12
//function checkAge (age) {
//  return (age > 18 || confirm(' Батьки дозволили ?'));
//}
//alert(checkAge (20));

//function checkAge (age) {
//  return age > 18 ? true : confirm( ' Батьки дозволили ?');
//}
//alert(checkAge(15));


//13
//min (7, 5);

//function min(a,b) {
//  if (a < b) {
//    alert(a);
//  } else if (a > b) {
//    alert(b);
//  } else {
//    alert(a);
//  }
//}


//14
//pow(prompt('Введіть парамтер', 'x'), prompt('Введіть парамтер', 'n')) 

//function pow(x, n) {
//  let result = x;

//  if (x % 1 === 0 && x > 0 && n % 1 === 0 && n > 0) {

//  for (let i = 1; i < n; i++) {
//    result *= x;
//  }
//  console.log(result);
//  } else {
//    alert('Введіть натуральні числа більше одниці');
//  }
//}


//15

//function ask(question, yes, no) {
//  if (confirm(question)) yes( )
//  else no( );
//  }
//  ask (
//  "Ви згодні?",
//   () => alert ("Ви погодилися."),
//   () => alert ("Ви скасували виконання.")
//  );

//16
//let salary = 3333;
//let expenses = 1750;
//let palmCost = 8000;

//let result = palmCost / (salary - expenses);
//if (result % 1 != 0) result = Math.ceil(result);
//console.log(result);
//якщо йому зп видають раз на місяць то за 5 не встигне, а на шосту в нього вистачить папуг))

//17
//let sum = 0;

//for (let i = 0; i < 10; i++) {
//  let ask = +prompt('введіть число');
//  if (ask < 0) {
//    sum += ask;
//  }
//}
//console.log(sum);











