function titleCase(sentence){

    const splitString = sentence.split(" ");
    let returnString = "";

    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i][0].toUpperCase()+splitString[i].slice(1)
    }

    for (let i = 0; i < splitString.length; i++) {
        returnString = returnString +" "+ splitString[i];
    }
    // need to toString the split
    return returnString.trim();
}

console.log(titleCase("hello world"))