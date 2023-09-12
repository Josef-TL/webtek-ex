/*
let balance = 50000;
if (balance > 10000){
    console.log("I am rich!")
} else {
    console.log("I am poor :(")
}

let mood = "happy"
let moodText = mood

if (mood == "happy"){
    moodText = "Good job, you're doing great!"
} else if (mood == "sad"){
    moodText = "Every cloud has a silver lining."
} else if (typeof mood === "number") {
    moodText = "Beep beep boop"
} else {
    moodText = "I'm sorry, I'm still learning about feelings!"
}
console.log(moodText)
document.write(moodText);


for (let j = 1; j < 4; j++){
    console.log("Hello World!");
}

for (let j = 1; j < 11; j++){
    console.log(j);
}

for (let j = 1; j < 11; j++){
    console.log("*");
}

for (let j = -5; j < 6; j++){
    console.log(j);
}
*/

let loopCounter = 1
for (let j= 5; j < 30;j++){
    if (loopCounter === 1){
        console.log(j)
    }else if (loopCounter === 3){
        loopCounter = 0
    }
    loopCounter += 1
}

// Random number between 0 and 10
const randomNumber = Math.floor(Math.random() * 11);
// Your code here
for (let j = 0; j < randomNumber; j++){
    console.log("#")
}

for (let j= 1; j < 11; j++){
    if (j>5){
        console.log(j + " is larger than 5")
    } else {
        console.log(j)
    }
}

for (let j= 1; j < 11; j++){
    if (j===10){
        console.log(j + " is 10")
    } else if (j > 6){
        console.log(j + " is a large number")
    } else if (j > 3){
        console.log(j + " is a relatively small number")
    } else {
        console.log(j + " is a small number")
    }
}


let word = "Copenhagen"
let wordLength = word.length

for (let j = 0; j < wordLength; j++){
    console.log(word[j])
    if (j === wordLength-1){
        console.log("That was the last letter!")
    }
}


let word2 = "ABCDEFGH"
let word2Lenght = word2.length
let word2Middle = Math.round((word2Lenght-1)/2)

for (let j = 0; j < word2Lenght; j++){
    if (j === word2Middle){
        console.log(word2[j] + " this is the middle character")
    } else {
        console.log(word2[j])
    }
}

for (let j = 1; j < 101; j++){
    // if multiple 3, print fizz
    // else if multiple 5 print buzz
    if ((j%3 == 0) && (j%5 == 0)){
        console.log("FizzBuzz")
    } else if (j%3 == 0){
        console.log("Fizz")
    } else if (j%5 == 0){
        console.log("Buzz")
    } else{
        console.log(j)
    }
}

if((5 % 0) > 0){
    console.log("success")
}