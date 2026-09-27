const selectElem = document.querySelector('#theme-select');
const logo = document.querySelector('#logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  const current = selectElem.value;

  if (current === 'dark') {
    document.body.dataset.theme = 'dark';
    logo.style.filter = 'none';
  } else {
    document.body.dataset.theme = 'light';
    logo.style.filter =
      'brightness(0) saturate(100%) invert(17%) sepia(80%) saturate(467%) hue-rotate(178deg) brightness(0.9) contrast(1.2)';
  }
}
