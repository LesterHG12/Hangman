const phrases = ["Actions speak louder than words.",
              "All good things must come to an end",
              "A picture is worth a thousand words",
              "Beggars can’t be choosers",
              "Birds of a feather flock together"];
let finished = false;

const imageProgression = ["Resources/StartingHangman.png", "Resources/HeadHangman.png", "Resources/BodyHangman.png", "Resources/LeftArmHangman.png", "Resources/RightArmHangman.png", "Resources/LeftLegHangman.png", "Resources/RightLegHangman.png"];

let wrongAttempts = 0;

let random = Math.floor(Math.random() * phrases.length);
const chosenPhrase = phrases[random];
let phraseHidden = chosenPhrase.replace(/[a-zA-Z]/g, "*");  

word.innerHTML = phraseHidden;

window.addEventListener('keypress', (e) => {
  if(!finished){
    const guess = String.fromCharCode(e.charCode);
    update(guess);
  }
})

function update(guess){
  if(phraseHidden.includes(guess.toLowerCase()) || phraseHidden.includes(guess.toUpperCase())){
    alert("That letter is already in the word");
  }
  else if(!chosenPhrase.includes(guess.toLowerCase()) && !chosenPhrase.includes(guess.toUpperCase())){
    wrongAttempts++;
    if(wrongAttempts === 7){
      alert("Sorry, you lost! Refresh to play again.");
      finished = true;
    }
    else{
      image.src = imageProgression[wrongAttempts];
    }
  }
  else{
    for(var i = 0; i < chosenPhrase.length; i++){
      if(chosenPhrase.charAt(i) === guess.toUpperCase())
        phraseHidden = phraseHidden.substring(0, i) + guess.toUpperCase() + phraseHidden.substring(i + 1);
      else if(chosenPhrase.charAt(i) === guess.toLowerCase())
        phraseHidden = phraseHidden.substring(0, i) + guess.toLowerCase() + phraseHidden.substring(i + 1);
    }
    word.innerHTML = phraseHidden;
    if(phraseHidden == chosenPhrase){
      alert("Congratulations! You won! Refresh to play again.");
      finished = true;
    }
  }
}
