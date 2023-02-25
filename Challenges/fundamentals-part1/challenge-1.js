'use strict';

/* 

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK � 
*/

let johnHeight = 1.65;
let johnMass = 110;
let johnBMI = johnMass / (johnHeight * johnHeight);

let markHeight = 1.83;
let markMass = 99;
let markBMI = markMass / (markHeight * markHeight);

let markHightBMI = markBMI > johnBMI;

console.log('John height: ' + johnHeight + 'm');
console.log('John mass: ' + johnMass + 'kg');
console.log('John BMI: ' + johnBMI);

console.log('\nMark height: ' + markHeight + 'm');
console.log('Mark mass:' + markMass + 'kg');
console.log('Mark BMI: ' + markBMI);

console.log('\nMark BMI is hight than John? ' + markHightBMI);
