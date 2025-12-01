
let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let state = false;
ctrlIcon.addEventListener('click', () => {
  progress.max=song.duration;
  if (state === false) {
    song.play();
    state = true;
    ctrlIcon.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else if (state === true) {
    song.pause();
    state = false;
    ctrlIcon.innerHTML = '<i class="fa-solid fa-play" ></i>';
  }

  if (state===true) {
    let id = setInterval(() => {
      progress.value = song.currentTime;
      if(state===false){
        clearInterval(id);
      }
    }, 2000);
  }
})

progress.onchange=function(){
  song.currentTime=progress.value;
}





