

console.log('Hello world');

//window.alert('This is an alert');



//let age = 14;

//let fullName = "Mohamed Ayman";

//let online = true;

//operators(+ - * / ** %)

//age **= 2;

//console.log(`You are ${age} years old`);
//console.log(typeof age)
//console.log(`Your first name is ${fullName}`);
//console.log(typeof fullName);
//console.log(`Is the player online? ${online}`)
//console.log(typeof online);

//let username = window.prompt(`What is your Username`);

//document.getElementById('mytest').textContent = `Your Username is ${username}`;

//console.log(`User input: ${username}`);

// Load the stored username when the page loads



//let whatever = window.prompt("How old are you?");
//whatever = Number(whatever)
//whatever+=1

//console.log(whatever, typeof whatever)

//const pi = Math.PI;
//let radius = window.prompt('Enter the radius of a circle');
//radius = Number(radius)
//let circumference = 2 * pi * radius;
//console.log(circumference)





//Math.round;
//Math.floor;
//Math.ceil;
//Math.pow;
//Math.sqrt;
//Math.sqrt;
//Math.cos;
//Math.tan;
//Math.abs;
//Math.sign;
//Math.min;
//Math.max;
//Math.random
//Math.ceil
//Math.round
//Math.floor

//let randomNum = Math.floor(Math.random() * 100) + 1;








/*let age;

age = window.prompt("How old are you?");

while (age >= 120){
    age = window.prompt("Enter your real age...")
}
if (age == ""){
    age = window.prompt("How old are you?")
}
while (age == "0"){
    window.alert("You aren't even born yet..")
}
if(age >= 18){
    console.log("You are old enough to enter this site")
}
while (age < 18 && age > 0) {
    window.alert("You can NOT enter this site");
}
*/







/*const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum  + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low, try again!");
            guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
        }
        else if(guess > answer){
            window.alert("Too high, try again!");
        }
        else{
            if(attempts >= 10){
            window.alert(`Congratulations, you got it correctly, it took you ${attempts} attempts (haha loser)`);
            running = false;
            }
            else{
            window.alert(`Congratulations, you got it correctly, it took you ${attempts} attempts, Good job.`);
            running = false;
            }
        }
    }
}
*/

/*function hbday(){
    console.log("you shall kys now!")
}
*/


/*let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";
fruits.push("blueberry");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple")

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit)
}



let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);


let username = "Mohamed";
let letters = [...username]

console.log(letters)


function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";

const food2 = "hamburger";

const food3 = "hotdog";

const food4 = "sushi";



openFridge(food1, food2, food3, food4);




function generatePassword(length, incLow, incupp, incnum, incsym){

    const lchars = "abcdefghijklmnopqrstuvwxyz";
    const uchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nchars = "0123456789"
    const schars = `!@#$%^&*()_+-={}[]\|;':.><?,"`;

    let allowedChars = ""
    let password = "";

    allowedChars += incLow ? lchars : "";
    allowedChars += incupp ? uchars : "";
    allowedChars += incnum ? nchars : "";
    allowedChars += incsym ? schars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passLength = 12;
const incLow = true;
const incupp = true;
const incnum = true;
const incsym = true;

const password = generatePassword(passLength, 
                                  incLow,
                                  incupp,
                                  incnum,
                                  incsym);

console.log(`Generated password: ${password}`)


function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color;
}

const car1 = new Car("Ford", "Mustang", 2025, "red");
console.log(car1.make);

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    } 
}

const product1 = new Product("shirt", 19.99);

product1.displayProduct();

class MathUtil{
    static PI = 3.14159;
}

console.log(MathUtil.PI)



const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate()
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
let dayOfTheWeek;

if (date.getDay() == 0){
    dayOfTheWeek = "Sunday"
}
else if (date.getDay() == 1){
    dayOfTheWeek = "Monday"
}
else if (date.getDay() == 2){
    dayOfTheWeek = "Tuesday"
}
else if (date.getDay() == 3){
    dayOfTheWeek = "Wednesday"
}
else if (date.getDay() == 4){
    dayOfTheWeek = "Thursday"
}
else if (date.getDay() == 5){
    dayOfTheWeek = "Friday"
}
else if (date.getDay() == 6){
    dayOfTheWeek = "Saturday"
}


console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
console.log(dayOfTheWeek);

function outer(){
    
    let message = "kys"
    function inner(){
        console.log(message);
    }

    inner();
}

message = "come back";

outer();

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`)
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();


console.log(`The current count is ${counter.getCount()}`)






function createGame(){
let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`)
}

function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`)
}


function getScore(){
    return score;
}

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(5);
game.decreaseScore(9);
console.log(`The final score is ${game.getScore}`)

let timeoutIds;

function startTimer() {
    timeoutIds = setTimeout(() => window.alert("just kys"), 3000); // Starts a 3-second timer
}

function clearTimer() {
    clearTimeout(timeoutIds); // Clears the timeout
}



console.time("test");

for(let i = 0; i < 1000000000; i++){

}

console.timeEnd("test");



let number = 12345678.123

number = number.toLocaleString("en-EG", {style: "currency", currency: "EGP"});
console.log(number);






import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(PI)


function func1(callback){
    setTimeout(() => {console.log("Task 1");
                    callback()}, 3000);
}

function func2(){
    console.log("task 2")
    console.log("task 3")
}

func1(func2)
*/


try{
    console.lag("hello");
}
catch(error){
    console.error(error);
}
finally{
    console.log("this is always there");

}

try{
    const dividend = Number(prompt("Enter a divident: "));
    const divisor = Number(prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error(divisor = (alert("I aint doing this today.")));
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error(divisor = (alert("I aint doing this today.")));
    }

    const result = dividend / divisor;
    alert(result);
    console.log(result);
}
catch(error){
    console.error(error)
}

console.log("You have reached the end");