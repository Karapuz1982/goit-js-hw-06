
const inputValid = document.querySelector('#validation-input');
inputValid.addEventListener('blur', () => {
    const expectedLength = parseInt(inputValid.getAttribute('data-length'));
    const actualLength = inputValid.value.length;
    if (actualLength === expectedLength) {
        inputValid.classList.add('valid');
        inputValid.classList.remove('invalid');
    }
    else {
        inputValid.classList.add('invalid');
        inputValid.classList.remove('valid');
    }
    
});