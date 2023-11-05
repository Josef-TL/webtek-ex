const strings = ["dog","cat","lazy","fox","jumps","over","the","fence","javascript","tobias rahim"];
let avg = 0;
let sum = 0;
strings.forEach((e,i,a)=>{
    sum += e.length
    avg = sum/a.length
});

document.write(avg)

const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Isabel",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Sophia",
    "Thomas",
    "Victoria",
    "William",
];

const filteredFirstNames = firstNames.filter((e)=> {
    return e.length > 5;
});

//console.log(filteredFirstNames)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((e)=>{
    return e%2 === 0;
});

//console.log(filteredNumbers)

const hours = [2,4,12,1,0.5,3,4,5,10]

const seconds = hours.map((e)=>{
    return e*180;
});

//console.log(seconds);

const words = ["apple", "banana", "cherry", "agøøørk","date", "fig", "grape", "kiwi", "lemon", "mango", "orange"];
const filterLetters = (array,char) =>{
    return array.filter((e) => {
        return e[0] === char;
    });
}


const result = filterLetters(words, "f"); //returns [apple, agøøørk]

//console.log(result)

const numbers2 = [1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 9, 1, 10];
// check if the index of the current value is equals to the index
// of the first apperance.

const filterNumbers2 = (array) => {
    return array.filter((e,i,a)=>{
        return i === a.indexOf(e)
    });
};

console.log(filterNumbers2(numbers2));




const cprArray = [
    "121256-7890",
    "987654-3210",
    "1004890123",
    "112233-44552",
    "111244-556611",
    "150690-3152asd",
];

const cprFilter = (array) => {
    const regex = new RegExp("^\\d{6}-\\d{4}$");
    return array.filter((e)=>{
        return regex.test(e)});
}
console.log(cprFilter(cprArray));