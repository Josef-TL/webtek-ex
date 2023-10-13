/*const kitten = {
    furColour: "orange",
    age: "23"
};*/

const laptop ={
    brand: "Lenovo",
    ram: "5GB"
};

const phone = {
    operatingSystem: "iOS",
    hasStylus: true,
    megapixels: 12,
    "batteryLife": "24 hours"
};

const person = new Object({
    firstName: "Josef",
    lastName: "Tonnesen-Lucas",
    age: 26,
    school: "KEA",
    hobbies: ["climbing","gaming","sleeping"],
    clothingStyle: "Sloppy"
});

// console.log the values of each property of "kitten"
const kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown",
};

// your code here

for (prop in kitten){
    console.log(kitten[prop])
}



const dog = {
    name: "Billy",
    wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex"
dog.wantsToPlay = true
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true



const astronautsInSpace = {
    people: [
        {
            name: "Cai Xuzhe",
            craft: "Tiangong"
        },
        {
            name: "Oleg Artemyev Do",
            craft: "ISS"
        },
        {
            name: "Denis Matveev",
            craft: "ISS"
        },
        {
            name: "Sergey Korsakov",
            craft: "ISS"
        },
        {
            name: "Kjell Lindgren",
            craft: "ISS"
        },
        {
            name: "Bob Hines",
            craft: "ISS"
        },
        {
            name: "Samantha Cristoforetti",
            craft: "ISS"
        },
        {
            name: "Jessica Watkins",
            craft: "ISS"
        },
        {
            name: "Chen Dong",
            craft: "Tiangong"
        },
        {
            name: "Liu Yang",
            craft: "Tiangong"
        }
    ],
    message: "success"
}
const numPeopleInSpace = astronautsInSpace.people.length;

console.log(numPeopleInSpace)
console.log(astronautsInSpace.people[numPeopleInSpace-1].craft)

for (const prop in astronautsInSpace.people) {
    let tempObj = astronautsInSpace.people[prop];
    let tempStr = [];

    if (tempObj.craft === "ISS"){
        tempStr = tempObj.name.split(" ");
        console.log(tempStr[tempStr.length-1])
        break
    }
}

function ChkPass(userData) {
    let status = "";



    if (userData.user && userData.password) {
        status = 'valid';
    }
    else {
        status = 'invalid';
    }
    return 'Status: ' + status;
}

const user = {
    user: "",
    password: "1234"
}

console.log(ChkPass(user));

