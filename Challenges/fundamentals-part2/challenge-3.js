/*

Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create alca 'calcBMI' method on each object to culate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

GOOD LUCK �
*/

const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function calcBMI() {
    
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  height: 1.92,
  mass: 92,
  calcBMI: function calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI ${mark.bmi.toFixed(2)} is higher than ${john.fullName}'s ${john.bmi.toFixed(2)}!`);
} else if(mark.bmi < john.bmi) {
  console.log(`${john.fullName}'s ${john.bmi.toFixed(2)} is higher ${mark.fullName}'s ${mark.bmi.toFixed(2)}!`);
} else {
  console.log(`The BMI is similar !`);
}