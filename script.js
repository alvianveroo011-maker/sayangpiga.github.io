const messages = [
    "seriusan ncii?",
    "yakin nih??",
    "benerann ga mau maafin kaka?",
    "nciii please sowii",
    "ihh nanti kaka nda ada temen ketawa",
    "kalo ngga, i will be really sad sumpil",
    "kaka sedih sihh...",
    "kaka bakal sedih banget...",
    "okedeh:(...",
    "tadii cuman bercanda, maafin kalo udah keterlaluan ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}