const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = ` <li class="list-group-item">
          <span>${todo}</span>
                    <i class="uil uil-trash-alt delete"></i>

        </li>`;

  list.innerHTML += html;
};

// add new
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // get user input and trim white space
  const todo = addForm.add.value.trim();
  if (todo.length > 0) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
