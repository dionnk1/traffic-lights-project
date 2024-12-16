/*
 * When you have a repetetive operation, try to convert it to a function. This will help you to minimize the necessary code changes on updates.
 * Imagine a case where you will need to apply a change that will affect all of them, in the case like below, you will need to go over each one by
 * one to change. But if you convert them to a function, you apply that change in the function and all of them will be using this advantage
 * to update without needing to make changes on each of them seperately.
 */
let redBtn = document.querySelector('.red');
let orangeBtn = document.querySelector('.orange');
let greenBtn = document.querySelector('.green');
let dotButton = document.querySelector('.dot');
/* Be consistent with variable naming. We usually prefer longer naming, like someButton. But for the cases like: text, label, 
* button it is ok to use them as: txt, lbl, btn. But make sure to use the same format on all of them. For instance:
* redBtn, orangeBtn, greenBtn, dotBtn
* OR
* redButton, orangeButton, greenButton, dotButton
*/
let alertInfo = document.querySelector(".alert-info");
let alertType = document.querySelector('.alert-type');
let alertDescription = document.querySelector('.alert-description');

alertInfo.style.display = 'none';

const resetButtonStyles = () => {
    redBtn.style.backgroundColor = 'rgb(41, 43, 44)';
    orangeBtn.style.backgroundColor = 'rgb(41, 43, 44)';
    greenBtn.style.backgroundColor = 'rgb(41, 43, 44)';
    dotButton.style.backgroundColor = 'rgb(41, 43, 44)';
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

const handleButtonClick = (btn, color, alertColor, alertTypeText, alertDescText, elementClass) => {
    btn.addEventListener('click', () => {
        resetButtonStyles();

        const element = document.querySelector(elementClass);
        if (element) {
            element.style.backgroundColor = color;
            setAlert(alertColor, "rgb(247, 247, 247)", alertTypeText, alertDescText);
        } else if (element == null) {
            resetButtonStyles();
            alertInfo.style.display = 'none';
        }

    });
}

/*
* I debbugged this section below, it triggered 4 clicks on initial run. Not quite sure why this is needed?
* Make sure to not trigger any unclicked operation forcefully.
*/
handleButtonClick(redBtn, '#dc3545', '#dc3545', 'Danger', 'Do NOT pass', '.red');
handleButtonClick(orangeBtn, '#fd7e14', '#fd7e14', 'Warning!', 'You probably should NOT pass.', '.orange');
handleButtonClick(greenBtn, '#198754', '#198754', 'Safe.', 'You can pass now.', '.green');
handleButtonClick(dotButton, '#dc3545', null, null, null, null);