
const adder = (a,b,c) => {
    return a+b+c;
}

//console.log(adder(10, 20, 5)); // 35


const maxxer = (a,b,c) => {
    document.write(Math.max(a,b,c));
}

//maxxer(11,2,3);

const testArray = [23,45,7,1,789,2,1,5,71];
const testNum = 10000

const averageMaybe = (array, num) => {
    if (typeof array !== "object") return alert("Wrong first parameter");
    if (typeof num !== "number") return alert("Wrong second parameter");

    let avg = 0
    for (let i = 0; i < array.length; i++) {
        avg += array[i]
    }
    avg = avg/array.length

    if (avg > num) return "false"
    if (avg < num) return "true"
}

//console.log(averageMaybe(testArray,testNum));

const maxOfArray = (array) =>{
    if (typeof array !== "object") return alert("Wrong first parameter");

    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i]
    }
    document.write(max)
}

//maxOfArray(testArray)

const nameArray = ["Australia", "Germany", "United States of America"]
const longName = (array) =>{
    if (typeof array !== "object") return alert("Wrong first parameter");

    let long = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > long.length) long = array[i]
    }
    document.write(long)
}

//longName(nameArray)


const nameArrayTwo = ["Australia", "Germany", "United States of America","Denmark","The United Kingdom of Great Britain and Northern Ireland","Independent and Sovereign Republic of Kiribati	"];

const countWords = (array) => {
    if (typeof array !== "object") return alert("Wrong first parameter");

    let temp = array[0];

    for (let i = 0; i < array.length; i++) {
        let j = array[i].split(" ").length;
        let tempSplitLen = temp.split(" ").length;

        if (j > tempSplitLen) temp = array[i];
    }
    document.write(temp);
}

countWords(nameArrayTwo)