var person = {
  firstName: 'Brian',
  lastName: 'Luong',
  hobby: 'Biking'
};

console.log(person);

var fullName = 'My full name is: ' + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'Astronaut';

console.log('My current job is: ' + person.job + '.');

person.previousJob = 'Dentist';

console.log('My previous job was: ' + person.previousJob + '.');

console.log(person);
