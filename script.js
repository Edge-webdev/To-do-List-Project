const toDoList = document.querySelector('.to-do-list');
const input = document.getElementById('to-do-list-input');
const add = document.querySelector('.add-to-list');

function addToList() {
  // Stores the text inside input;
  var inputValue = input.value;

  // Checks if input value is not empty
  if (inputValue) {
    // Creates and inserts the element
    const li = document.createElement('li');
    li.innerHTML = `
    ${inputValue}
    <button class="check-item" onclick="checkItem(this)">
    <i class="fas fa-check"></i>
    </button>
    <button class="remove-item" onclick="removeItem(this)">
      <i class="fas fa-ban fa-lg"></i>
    </button>
    `;
    li.classList.add('list-item');
    toDoList.appendChild(li);
    // Clear input value
    input.value = '';
  } else {
    alert('You have to input a value into the text area!');
  }
}

function removeItem(listItem) {
  // Looks for the button's grandparent (The list) and removes the parent node of the button
  listItem.parentNode.parentNode.removeChild(listItem.parentNode);
}

function checkItem(item) {
  item.parentNode.classList.add('checked');
}
