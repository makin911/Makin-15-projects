
let scrollcontainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
scrollcontainer.addEventListener('wheel', (ev) => {
  ev.preventDefault();
  scrollcontainer.scrollLeft += ev.deltaY;
  scrollcontainer.style.scrollBehavior = "auto";
})

backBtn.addEventListener('click', () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= 200;
});
nextBtn.addEventListener('click', () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += 200;
});