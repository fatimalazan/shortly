const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');
const successMsg = document.getElementById('success-msg');

linkForm.addEventListener('submit', formSubmit);

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
    input.classList.remove('border-green-500');
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL';
    successMsg.innerHTML = '';
    input.classList.add('border-red');
    input.classList.remove('border-green-500');
  } else {
    errMsg.innerHTML = '';
    successMsg.innerHTML = 'URL is Valid';
    input.classList.add('border-green-500');
    input.classList.remove('border-red');
  }
}
