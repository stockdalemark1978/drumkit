window.addEventListener('keydown', function(event){
   

    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    console.log(audio);
    if(!audio) return;

    audio.play();
});