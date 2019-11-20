let drumPads = {
    113: {
        id: "pad-1",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/40[kb]lotom.aif.mp3"),
        description: "low tom",
    },
    119: {
        id: "pad-2",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/38[kb]midtom.aif.mp3"),
        description: "mid tom",
    },
    101: {
        id: "pad-3",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/35[kb]hitom.aif.mp3"),
        description: "high tom",
    },
   97: {
       id: "pad-4",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/20[kb]quickhat1.aif.mp3"),
        description: "hihat",
    },
    115: {
        id: "pad-5",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/88[kb]bigopenhh.aif.mp3"),
        description: "open hihat",
    },
    100: {
        id: "pad-6",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/240[kb]HatRoll.aif.mp3"),
        description: "hihat roll",
    },
    122: {
        id: "pad-7",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/5[kb]sidestick.aif.mp3"),
        description: "sidestick",
    },
    120: {
        id: "pad-8",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/19[kb]just_a_snare.aif.mp3"),
        description: "snare",
    },
    99: {
        id: "pad-9",
        sound: new Audio("https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/120[kb]basic-ekick.wav.mp3"),
        description: "kick",
    },
};

function keypressSoundEventHandler(e) {
    let key = e.keyCode;
  if (e.keyCode in drumPads) {
     drumPads[key].sound.play();
 }
}

function keypressColorEventHandler(e) {
    let key = e.keyCode;
    if (e.keyCode in drumPads) {
        let object = drumPads[key];    
        let objectId = object.id;
        document.getElementById(`${objectId}`).setAttribute("class", "pressed");
    }
}

document.addEventListener("keypress", keypressSoundEventHandler, true);
document.addEventListener("keypress", keypressColorEventHandler, true);
