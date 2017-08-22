window.addEventListener('keydown', function(event){
   

    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

   
    if(!audio) return; //stops function if there is not value for that particular key
    
    audio.currentTime = 0; //restarts the audio file back to 0 so it will play                                  //immediately if key is pressed, even if it was already                               //playing
    audio.play();
  
    key.classList.add('playing');
   
});

function removeTransition(event) {
   if(event.propertyName !== 'transform') return; //tells the function to skip any event that occurs which is not transform
   this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));