const selectElem = document.querySelector('#theme-select');
const pageContent = document.body;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  const current = selectElem.value;

  if (current === 'ocean') {
    pageContent.dataset.theme = 'ocean';
    pageContent.style.fontFamily = 'Papyrus, fantasy';
  } else if (current === 'forest') {
    pageContent.dataset.theme = 'forest';
    pageContent.style.fontFamily = 'Impact, sans-serif';
  } else if (current === 'desert') {
    pageContent.dataset.theme = 'desert';
    pageContent.style.fontFamily = 'Big Caslon, serif';
  } else {
    pageContent.dataset.theme = 'default';
    pageContent.style.fontFamily = 'Georgia, serif';
  }
}
