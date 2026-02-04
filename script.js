import { Todo } from './Todo.js';

let todo = new Todo();

const inputValue = document.querySelector('#button');
const ulList = document.querySelector('.ul-list');

function updateNode(itemId, newVal) {
  const checkbox = document.querySelector(`#todo-${itemId}`);
  const label = checkbox.nextElementSibling;

  if (newVal) {
    label.classList.add('textDecoration');
  } else {
    label.classList.remove('textDecoration');
  }
}

function render(todoItem) {
  const Li = document.createElement('li');
  Li.dataset.id = todoItem.id;

  const Input = document.createElement('input');
  const label = document.createElement('label');
  Input.type = 'checkbox';
  Input.checked = todoItem.completed;
  const checkboxId = `todo-${todoItem.id}`;
  Input.id = checkboxId;
  label.htmlFor = checkboxId;
  label.innerText = todoItem?.item;
  Li.appendChild(Input);
  Li.appendChild(label);
  ulList.append(Li);

  Input.addEventListener('change', (e) => {
    const val = e.target.checked;
    todo.updateTodod(todoItem.id, val);
    updateNode(todoItem.id, val);
    console.log(todo.todo);
  });
}

inputValue.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return alert('not valid input');

  const item = todo.addTodo(value);
  render(item);
  input.value = '';
});
