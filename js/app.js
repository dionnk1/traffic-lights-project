// Accessing button through a list
const buttonClasses = ['red', 'orange', 'green', 'dot'];
const buttons = {};

buttonClasses.forEach(className => {
    buttons[className] = document.querySelector(`.${className}`);
});

// Accesing buttns
let redButton = buttons.red;
let orangeButton = buttons.orange;
let greenButton = buttons.green;
let dotButton = buttons.dot;

// Alert elemments
let alertInfo = document.querySelector(".alert-info");
let alertType = document.querySelector('.alert-type');
let alertDescription = document.querySelector('.alert-description');

// setting default display of alert to none
alertInfo.style.display = 'none';

// Function to reset buttons
const resetButtonStyles = () => {
    redButton.style.backgroundColor = 'rgb(41, 43, 44)';
    orangeButton.style.backgroundColor = 'rgb(41, 43, 44)';
    greenButton.style.backgroundColor = 'rgb(41, 43, 44)';
    dotButton.style.backgroundColor = 'rgb(41, 43, 44)';
}

// Function to construct personalized alert
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

// Function to handle button click
const handleButtonClick = (color, alertColor, alertTypeText, alertDescText, elementClass) => {
    resetButtonStyles();

    const element = document.querySelector(elementClass);
    if (element) {
        element.style.backgroundColor = color;
        setAlert(alertColor, "rgb(247, 247, 247)", alertTypeText, alertDescText);
    } else {
        resetButtonStyles();
        alertInfo.style.display = 'none';
    }
};