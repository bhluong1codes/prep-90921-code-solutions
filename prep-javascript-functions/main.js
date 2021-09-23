function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var product = convertHoursToMinutes(2);

console.log(product);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('Brian');

console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return num1 * 5 + num2 * 5;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return radius * Math.PI * 2;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('Brian', 'Luong'));

function cube(number) {
  return number * number * number;
}

console.log(cube(5));
