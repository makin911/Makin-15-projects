
let image = document.getElementById('eyeImg');
let input=document.getElementById('pass');
image.addEventListener('click', (item) => {

  //or if (input.type==='password')
  if (item.target.src.includes('invisible')) {
    item.target.src = "/password-visibility/visible.png";
    input.setAttribute('type','text');
  } else {
    item.target.src = "/password-visibility/invisible.png";
    input.setAttribute('type','password');
  }
  
})