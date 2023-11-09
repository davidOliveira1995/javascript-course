/*
LECTURE: Values and Variables

1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)

2. Log their values to the console

*/

let country, continent, population

country = 'Brazil'
continent = 'South America'
population = 203000000

console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${population}`)

/*

LECTURE: Data Types

1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet

2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

*/

let isIsland, language

isIsland = false

console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${population}\nIs Island: ${isIsland}\nLanguage: ${language}`)

/*

LECTURE: let, const and var

1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)

2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.

3. Try to change one of the changed variables now, and observe what happens

*/

language = 'Portuguese'

console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${population}\nIs Island: ${isIsland}\nLanguage: ${language}`)

/*

LECTURE: Basic Operators

1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?

2. Increase the population of your country by 1 and log the result to the console

3. Finland has a population of 6 million. Does your country have more people than
Finland?

4. The average population of a country is 33 million people. Does your country
have less people than the average country?

5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese

*/

let splitHalfPopulation = population / 2

console.log(`Half of the Population: ${splitHalfPopulation}`);

population++
console.log(`${population}`);

let filandPopulation = 6000000

let brazilIsbiggister = filandPopulation > population ? 'Filandd is Biggister' : 'Brazil is Biggister'

console.log(`${brazilIsbiggister}`);

let averagePopulation = (population / 2) > 33000000 ? 'É maior que 33.000.000 Milhões' : 'É menor do que 33.000.000 Milhões'

console.log(`Média população: ${averagePopulation}`);

/*

LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax

*/

