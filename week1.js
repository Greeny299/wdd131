// Constants and variables
const PI = 3.14;
let radius = 3;

console.log('PI =', PI);
console.log('radius =', radius);
console.log('Circumference =', 2 * PI * radius);

// Type coercion example
const one = 1;
const two = '2';

console.log('one + two =', one + two);
console.log('typeof two =', typeof two);

// Global and block scope example
let course = 'CSE131';

if (true) {
  let student = 'John';
  console.log('Inside block: course =', course);
  console.log('Inside block: student =', student);
}

console.log('Outside block: course =', course);

try {
  console.log('Outside block: student =', student);
} catch (error) {
  console.log('student is out of scope outside the block');
}

// A constant cannot be reassigned
// PI = 3.14159; // This would cause an error in JavaScript
