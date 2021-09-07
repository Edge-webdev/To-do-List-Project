const toDoList = document.querySelector('.to-do-list');
const input = document.getElementById('to-do-list-input');
const add = document.querySelector('.add-to-list');

function addToList() {
  var inputValue = input.value;
  if (inputValue) {
    const li = document.createElement('li');
    li.innerHTML = `
    ${inputValue}
    <button class="remove-item"><i class="fas fa-ban fa-lg"></i></button>
    `;
    li.classList.add('list-item');
    toDoList.appendChild(li);
    input.value = '';
  } else {
    alert('You have to input a value into the text area!');
  }
}
