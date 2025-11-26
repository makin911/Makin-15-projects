

let item = document.getElementById('btnAdd');
let text = document.getElementById('inputItem');


item.addEventListener('click', (ev) => {
  ev.preventDefault();
  if (text.value === '') {
    alert("write something")
  } else {
    let ptag = document.createElement('p');
    let btnRemove = document.createElement('button');
    let data = text.value;
    btnRemove.textContent = 'Remove';

    ptag.textContent = data;
    ptag.classList.add("taskItems")
    document.getElementById('taskList').appendChild(ptag)
    ptag.appendChild(btnRemove);
    

  }
  text.value = "";
  saveData();
})

let tasks = document.getElementById('taskList');
tasks.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'P') {
    ev.target.classList.toggle('checked');
    saveData();
  }
  else if (ev.target.tagName === 'BUTTON') {
    ev.target.parentElement.remove();
    saveData();
  }
});

function saveData(){
  localStorage.setItem('data',tasks.innerHTML);
}

function showTask(){
  tasks.innerHTML=localStorage.getItem('data');
}

showTask();

