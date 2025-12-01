

let createButton = document.getElementById('btnCreate');
//creating each note:
createButton.addEventListener('click', (element) => {
  let textArea = document.createElement('textarea');
  let noteBox = document.getElementById('notes');

  //new div
  let newDiv = document.createElement('div');
  newDiv.classList.add('eachBox');
  noteBox.appendChild(newDiv);


  textArea.placeholder = "write here";
  textArea.classList.add('areaBox');
  textArea.spellcheck = false;
  newDiv.appendChild(textArea);

  let delButton = document.createElement('img');
  delButton.src = "/note-creator/icons8-delete-48.png";
  delButton.classList.add('del');
  // delButton.onclick = handleDelete;
  newDiv.appendChild(delButton);
  saveData();
})



let items = document.getElementById('notes');
function saveData() {
  localStorage.setItem('data2', items.innerHTML)
}

function showTask() {
  items.innerHTML = localStorage.getItem('data2');
}

showTask();

let delbutton = document.getElementById('notes');
delbutton.addEventListener('click', (item) => {
  console.log(item.target);
  if (item.target.tagName === 'IMG') {
    item.target.parentElement.remove();
    saveData();
  }

})
