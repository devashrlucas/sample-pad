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
        setTimeout(function() {
            document.getElementById(`${objectId}`).setAttribute("class", "pads");
        }, 20);
    }
}

document.addEventListener("keypress", keypressSoundEventHandler, true);
document.addEventListener("keypress", keypressColorEventHandler, true);


let backingTracks = {
    0: {
        id: "track-1",
        sound: new Audio("https://sampleswap.org/mp3/artist/555766/Jack-Mayor_United-160.mp3"),
        description: "ambient",
    },
    1: {
        id: "track-2",
        sound: new Audio("https://sampleswap.org/mp3/artist/238284/Big-Ot_Coast-160.mp3"),
        description: "hip hop",
    },
    2: {
        id: "track-3",
        sound: new Audio("https://sampleswap.org/mp3/artist/80146/Bchill67_Club-Scene-160.mp3"),
        description: "house",
    },
}
/*
let toggleEventHandler = function(e) {
    let tgt = e.target;
    let tgtId = tgt.id;
    if (tgt.className === "track"){
        document.getElementById(`${tgtId}`).setAttribute("checked", "checked");
    }
};
*/


// let getCheckboxes = document.getElementsByClassName('tracks');


let toggleOnEventHandler = function(e) {
   let tgt = e.target;
   let tgtId = tgt.id;
   if (tgt == "[object HTMLInputElement]") {
       for (let i = 0; i < 4; i++) {
           if (tgtId == backingTracks[i].id) {
               backingTracks[i].sound.pause();
           }
       }
   }
}

let toggleOffEventHandler = function(e) {
    let tgt = e.target;
    let tgtId = tgt.id;
    if (tgt == "[object HTMLInputElement]") {
        for (let i = 0; i < 4; i++) {
            if (tgt.checked) {
                if (tgtId == backingTracks[i].id) {
                    backingTracks[i].sound.play();
            }
        }
    }
  }
} 


document.addEventListener("click", toggleOnEventHandler, true);
document.addEventListener("click", toggleOffEventHandler, true);