console.log(danishInflationNumbersWithYear);
console.log(danishInflationNumbers);

function convertRange(array,toMin,toMax) {
    const fromMin = Math.min(...array);
    const fromMax = Math.max(...array);
    return array.map((elem,) =>
        ((elem - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin)+1
    )
}
const array2 = convertRange(danishInflationNumbers,0,2)

console.log(array2)

document.querySelector('button').addEventListener('click', () => {
    let delay = 300;
    array2.forEach((dataPoint, index) => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // play a tone based on data for the duration of a 12th note every second
        const timeBetweenNotesInSeconds = 0.2;
        synth.triggerAttackRelease(dataPoint * 100, "8n", now + (index * timeBetweenNotesInSeconds));
    });
});