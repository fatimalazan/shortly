const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');
const successMsg = document.getElementById('success-msg');

btn.addEventListener('click', navToggle);
linkForm.addEventListener('submit', formSubmit);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something';
    successMsg.innerHTML = '';
    input.classList.add('border-red');
    input.classList.remove('border-green-600');
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL';
    successMsg.innerHTML = '';
    input.classList.add('border-red');
    input.classList.remove('border-green-600');
  } else {
    errMsg.innerHTML = '';
    successMsg.innerHTML = 'URL is Valid';
    input.classList.add('border-green-600');
  }
}
