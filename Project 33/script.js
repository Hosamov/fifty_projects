const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
  notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea
  `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text); //using marked library

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS(); //update local storage (delete item)
  });

  document.body.appendChild(note);
}

//// Local Storage Crash course:
// localStorage.setItem('name', JSON.stringify(object)); // save an item to local storage, using stringify (needs JSON.stringify)
// JSON.parse(localStorage.getItem('name')); //view the item using JSON.parse()
// localStorage.removeItem('name'); //remove item from local storage

//function to update local storage:
function updateLS() {
  const notesText = document.querySelectorAll('textarea');

  const notes = [];

  // for each note add the value to the array...
  notesText.forEach(note => notes.push(note.value));
  console.log(notes);

  localStorage.setItem('notes', JSON.stringify(notes));
}