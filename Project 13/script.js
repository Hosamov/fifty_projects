const tagsEl = document.getElementById('tags');
const textArea = document.querySelector('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if(e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10); //10ms

    randomSelect()
  }
});

function createTags(input) {
  //split data where a comma exists, ensure it's not an empty space and trim whitespace
  //.trim() - removes whitespace from both ends of a string
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span'); //create a new span element for each tag
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl); //add the tag to tagsEl
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100); //every 100ms

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
