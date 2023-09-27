/*
A.1
Create two arrays with the following values:
[5,6,3,4,6,34,5,5] [5,5,5,66,7,3,1,1,1,4]

Concatenate the arrays and sort the concatenated array

Ensure the array has been sorted by logging the results



arrayOne = [5,6,3,4,6,34,5,5];
arrayTwo =  [5,5,5,66,7,3,1,1,1,4];
joinedArray = arrayOne.concat(arrayTwo);
console.log(joinedArray.sort());

// A.2
//Create the initial javascript like this:
let number = "22";
let number2 = "22";

console.log(number + number2);
//Output: 2222

number = parseInt(number);
number2 = parseInt(number2);
console.log(number + number2);



// A.3
//Create the initial javascript like this:
participants = ["nicklas;33","benjamin;44","lars;55"];
let totalAge = 0;

participants.forEach(function(value){
    let temp = value.split(";");
    totalAge += parseInt(temp[1]);
    }
);


let sum = 0
for (let i=0; i < participants.length;i++){
    let currentElement = participants[i];
    let currentElementAsArray = currentElement.split(";");
    let currentElementNumberOnly = parseInt(currentElementAsArray[1]);
    sum = sum + currentElementNumberOnly;
}
console.log(sum)
console.log(totalAge)
*/

//B1
function logString(str="no string") {
    console.log(str);
}
logString(3);

//B1.1
function adder(numOne, numTwo){
    return numOne+numTwo;
}
const returnedNumber = adder(2, 6);
console.log(returnedNumber); // 8

//B2
function charDetector(str) {
    let temp = false;
    if (str.charAt(0) === "a") temp = true;
    return temp;
}

console.log(charDetector('kea')); // false
console.log(charDetector('anna')); // true

//B3a

function celciusToFahrenheit(celcius) {
    let result = 0
    let resultString = ""

    result = (celcius*1.8)+32
    resultString = result + " degree fahrenheit"

    return resultString
}
console.log(celciusToFahrenheit(30)); // 86 degree fahrenheit

function fahrenheitToCelcius(far) {
    let result = 0
    let resultString = ""

    result = (far-32)/1.8
    resultString = result + " degree celcius"

    return resultString
}
console.log(fahrenheitToCelcius(86)); // 86 degree fahrenheit

//B3c
function convertTemperature(inputScale, degrees){
    let result = ""

    //if (inputScale !== "fahrenheit" || inputScale !== "celcius"){return "wrong scale input"}
    if (typeof degrees !== "number"){return "wrong degree input"}

    if (inputScale === "fahrenheit"){
        result = fahrenheitToCelcius(degrees);
    }
    if (inputScale === "celcius"){
        result = celciusToFahrenheit(degrees)
    }

return result
}

console.log(convertTemperature("celcius",30));

//B4
function increaseByHalf(num) {
return num+(num/2)
}
console.log(increaseByHalf(50)); // 75
console.log(increaseByHalf(100)); // 150

//B5
function printMessage(x) {
    console.log("Hello, nice to meet you " + x);
}

function getMessage(name) {
    return "Hello, nice to meet you " + name;
}

printMessage("Mitch");
printMessage("August");
getMessage("Laetitia");

// How many times is the function printMessage called ?
//2

//How many times is the function getMessage called ?
// 1

// What is the parameter name for the function printMessage ?
// x

// What is the parameter name for the function getMessage ?
// name

//B6
function logString(stringToLog, numberOfTimesToLog){
    if (numberOfTimesToLog > stringToLog.length) {return console.log("Invalid parameters")}

    for (let i = 0; i < numberOfTimesToLog; i++) {
        console.log(stringToLog+" "+i);
    }
}

logString("hello",6);


//let input = prompt("Please enter a valid CPR number:","123456-1234")

function cprCheck(cpr){
    const regex = new RegExp("\\d{6}-[0-9]{4}");
    return regex.test(cpr);
}

console.log(cprCheck(input));


