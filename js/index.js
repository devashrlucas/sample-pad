let drumPads = [
    {
        id: 1,
        keyCode: 49,
        URL: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3",
        description: "big verby clap",
    },
    {
        id: 2,
    }

];

let testPad = {
    id: 1,
    keyCode: 49,
    sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3"),
    description: "big verby clap",
}


document.onkeypress = function(e) {
if (e.keyCode == testPad.keyCode) {
    testPad.sound.play();
    }
};