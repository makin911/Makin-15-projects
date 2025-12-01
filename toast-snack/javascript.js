let toastBox = document.getElementById('toasts');
let successMsg = '<i class="fa-duotone fa-solid fa-circle-check"></i>successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>please fix the error';
let invalidsMsg = '<i class="fa-solid fa-circle-exclamation"></i>invalid input, again please';

function createToast(msg) {

  let createToast = document.createElement('div');
  createToast.classList.add('toast');
  createToast.classList.add('show');
  let createToastHeader = document.createElement('div');
  createToastHeader.classList.add('toast-header');
  createToastHeader.classList.add('box');
  let toast = document.createElement('h4');
  //adding proggress-bar to each toast:
  toast.classList.add('progress');
  toast.innerHTML = msg;
  if (msg.includes('success')) {
    toast.classList.add('success')
  }
  if (msg.includes('error')) {
    toast.classList.add('error')
  }
  if (msg.includes('invalid')) {
    toast.classList.add('invalid')
  }
  // let span = document.createElement('span');
  // span.setAttribute("type","button")
  // span.classList.add('btn');
  // span.classList.add('btn-close');
  // span.setAttribute("data-bs-dismiss", "toast");
  toastBox.appendChild(createToast);
  createToast.appendChild(createToastHeader);
  createToastHeader.appendChild(toast);
  // createToastHeader.appendChild(span);

  setTimeout(() => {
    toast.parentElement.parentElement.remove();
  }, 5000);

}
