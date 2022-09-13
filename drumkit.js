

 const playDrum = (e) => {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio)return;// stop function from returning altogther if no audio is associated

    audio.currentTime = 0;//rewind to start

    audio.play();

    key.classList.add('playing');

};

 function removeTransition(e){
        
    if(e.propertyName !== "transform") return;//skip if not a tranform

    this.classList.remove('playing');

    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    window.addEventListener("keydown", playDrum)

