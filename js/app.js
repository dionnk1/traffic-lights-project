let redBtn = document.querySelector('.red');
let orangeBtn = document.querySelector('.orange');
let greenBtn = document.querySelector('.green');

let alertInfo = document.querySelector(".alert-info");
let alertType = document.querySelector('.alert-type');
let alertDescription = document.querySelector('.alert-description');

alertInfo.style.display = 'none';

const resetButtonStyles = () => {
    redBtn.style.backgroundColor = 'rgb(41, 43, 44)';
    orangeBtn.style.backgroundColor = 'rgb(41, 43, 44)';
    greenBtn.style.backgroundColor = 'rgb(41, 43, 44)';
}

const setAlert = (bgColor, textColor, alertTypeText, alertDescText) => {
    alertInfo.style.cssText = `
        display: block;
        background-color: ${bgColor};
        color: ${textColor};
        border: none;
    `

    alertType.textContent = alertTypeText;
    alertDescription.textContent = alertDescText;
}

const handleButtonClick = (btn, color, alertTypeText, alertDescText, elementClass) => {
    btn.addEventListener('click', () => {
        resetButtonStyles();

        const element = document.querySelector(elementClass);
        if (element) {
            element.style.backgroundColor = color;
        }

        setAlert(color, "rgb(247, 247, 247)", alertTypeText, alertDescText);
    });
}

handleButtonClick(redBtn, '#dc3545', 'Danger', 'Do NOT pass', '.red');
handleButtonClick(orangeBtn, '#fd7e14',  'Warning!', 'You probably should NOT pass.', '.orange');
handleButtonClick(greenBtn, '#198754', 'Safe.', 'You can pass now.', '.green');