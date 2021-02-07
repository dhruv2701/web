const textInput = document.getElementById('text');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const speedInput = document.getElementById('speed');

playButton.addEventListener('click',()=>{
    playText(textInput.value);
})

pauseButton.addEventListener('click',()=>{
    pauseText();
})

function playText(text){
    console.log(text);
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.addEventListener('end',()=>{
        textInput.disabled = false;
    })
    utterance.rate  = speedInput.value  ;
    textInput.disabled = true;
    speechSynthesis.speak(utterance);
}

function pauseText(){
    if(speechSynthesis.speaking)speechSynthesis.pause();
}