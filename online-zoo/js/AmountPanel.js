const radiobuttons = document.querySelectorAll('.amount-bar__radiobutton');
const AMOUNT_INPUT = document.querySelector('.amount-form__input');

for (const radiobutton of radiobuttons) {
    radiobutton.onclick = e => {
        AMOUNT_INPUT.value = e.target.value;
    }
}

const setDefaultAmount = () => {
    for (const radiobutton of radiobuttons) {
        if (radiobutton.value === '100') {
            radiobutton.checked = true;
            AMOUNT_INPUT.value = radiobutton.value;
        }
    }
}

AMOUNT_INPUT.addEventListener('input', () => {
    if (AMOUNT_INPUT.value.length > 4 || AMOUNT_INPUT.value == '0') {
        AMOUNT_INPUT.value = AMOUNT_INPUT.value.slice(0, -1);
    }

    for (const radiobutton of radiobuttons) {
        (AMOUNT_INPUT.value === radiobutton.value) ? radiobutton.checked = true : radiobutton.checked = false;
    }
})

AMOUNT_INPUT.addEventListener('keydown', e => {
    const invalidChars = ['-', '+', 'e', 'E', '.'];

    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
})

export { setDefaultAmount }

