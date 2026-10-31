const form = document.querySelector('#ticketForm');
const typeSelect = document.querySelector('#ticketType');
const identityField = document.querySelector('#identityField');
const identifierLabel = document.querySelector('#identifierLabel');
const identifierInput = document.querySelector('#identifierInput');
const errorBox = document.querySelector('#formErrors');
const ticketInfo = document.querySelector('#ticketInfo');
const ticketName = document.querySelector('#ticketName');
const ticketLabel = document.querySelector('#ticketLabel');
const ticketDate = document.querySelector('#ticketDate');
const ticketNumber = document.querySelector('#ticketNumber');

function updateIdentityField() {
  const type = typeSelect.value;
  const isVisible = type === 'student' || type === 'guest';

  identityField.classList.toggle('hidden', !isVisible);
  identifierInput.required = isVisible;

  if (type === 'student') {
    identifierLabel.textContent = 'Student ID';
    identifierInput.placeholder = '123456789';
    identifierInput.value = identifierInput.value.trim();
  } else if (type === 'guest') {
    identifierLabel.textContent = 'Access Code';
    identifierInput.placeholder = 'EVENT131';
    identifierInput.value = identifierInput.value.trim();
  } else {
    identifierInput.value = '';
  }
}

function setMinimumDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');

  document.querySelector('#eventDate').min = `${year}-${month}-${day}`;
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function validateForm() {
  const fullName = document.querySelector('#fullName').value.trim();
  const eventDate = document.querySelector('#eventDate').value;
  const type = typeSelect.value;
  const identifier = identifierInput.value.trim();
  const errors = [];

  if (fullName.length < 2) {
    errors.push('Please enter your full name.');
  }

  if (!eventDate) {
    errors.push('Please choose an event date.');
  } else {
    const selectedDate = new Date(`${eventDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      errors.push('The event date must be later than today.');
    }
  }

  if (!type) {
    errors.push('Please select a ticket type.');
  }

  if (type === 'student') {
    if (!/^\d{9}$/.test(identifier)) {
      errors.push('Student ID must be exactly 9 digits.');
    }
  }

  if (type === 'guest') {
    if (identifier.toUpperCase() !== 'EVENT131') {
      errors.push('Guest access code must be EVENT131.');
    }
  }

  return errors;
}

function showErrors(errors) {
  errorBox.innerHTML = '';
  if (!errors.length) {
    errorBox.classList.remove('visible');
    return;
  }

  const list = document.createElement('ul');
  errors.forEach((message) => {
    const item = document.createElement('li');
    item.textContent = message;
    list.appendChild(item);
  });

  const heading = document.createElement('strong');
  heading.textContent = 'Please correct the following:';

  errorBox.appendChild(heading);
  errorBox.appendChild(list);
  errorBox.classList.add('visible');
}

function showSuccess(name, type, date) {
  ticketName.textContent = name;
  ticketLabel.textContent = type === 'student' ? 'Student' : 'Guest';
  ticketDate.textContent = formatDate(date);
  ticketNumber.textContent = type === 'student' ? `Student ID: ${identifierInput.value.trim()}` : `Access Code: ${identifierInput.value.trim()}`;
  ticketInfo.classList.remove('hidden');
}

typeSelect.addEventListener('change', () => {
  updateIdentityField();
  errorBox.classList.remove('visible');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = document.querySelector('#fullName').value.trim();
  const eventDate = document.querySelector('#eventDate').value;
  const type = typeSelect.value;
  const errors = validateForm();

  showErrors(errors);
  ticketInfo.classList.add('hidden');

  if (errors.length > 0) {
    return;
  }

  showSuccess(fullName, type, eventDate);
});

setMinimumDate();
updateIdentityField();
