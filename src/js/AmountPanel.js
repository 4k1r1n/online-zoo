const radiobuttons = document.querySelectorAll('.amount-bar__radiobutton');
const AMOUNT_INPUT = document.querySelector('.amount-form__input');

for (let i = 0; i < radiobuttons.length; i += 1) {
  radiobuttons[i].onclick = (e) => {
    AMOUNT_INPUT.value = e.target.value;
  };
}

const setDefaultAmount = () => {
  for (let i = 0; i < radiobuttons.length; i += 1) {
    if (radiobuttons[i].value === '100') {
      radiobuttons[i].checked = true;
      AMOUNT_INPUT.value = radiobuttons[i].value;
    }
  }
};

AMOUNT_INPUT.addEventListener('input', () => {
  if (AMOUNT_INPUT.value.length > 4 || AMOUNT_INPUT.value === '0') {
    AMOUNT_INPUT.value = AMOUNT_INPUT.value.slice(0, -1);
  }

  for (let i = 0; i < radiobuttons.length; i += 1) {
    if (AMOUNT_INPUT.value === radiobuttons[i].value) {
      radiobuttons[i].checked = true;
    } else {
      radiobuttons[i].checked = false;
    }
  }
});

AMOUNT_INPUT.addEventListener('keydown', (e) => {
  const invalidChars = ['-', '+', 'e', 'E', '.'];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

export default setDefaultAmount;
