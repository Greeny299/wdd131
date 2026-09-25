const selectElem = document.getElementById('webdevlist');
const messageElem = document.getElementById('message');

selectElem.addEventListener('change', function () {
  const codeValue = selectElem.value;
  console.log(codeValue);

  if (codeValue === '') {
    messageElem.textContent = 'No language chosen yet.';
    return;
  }

  const languageNames = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript'
  };

  messageElem.textContent = `You selected: ${languageNames[codeValue]}`;
});
