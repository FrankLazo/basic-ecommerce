const whatsappBtn = document.getElementById('whatsapp-btn');
const whatsappContainer = document.getElementById('whatsapp-container');
const whatsappBox = document.getElementById('whatsapp-box');
const whatsappTime = document.getElementById('whatsapp-time');
const whatsappClose = document.getElementById('whatsapp-close');
const whatsappMessage = document.getElementById('whatsapp-message');
const whatsappSend = document.getElementById('whatsapp-send');
const timeAnimClose = 250;

let today = new Date();
let hours = today.getHours().toString();
let minutes = today.getMinutes().toString();

if (hours.length === 1)
{
    hours = '0' + hours;
}

if (minutes.length === 1)
{
    minutes = '0' + minutes;
}

let time = hours + ':' + minutes;

whatsappTime.innerHTML = time;

let activeChat = false;

whatsappBtn.addEventListener('click', (e) => {
    if (activeChat)
    {
        setTimeout(() => {
            whatsappContainer.classList.toggle('whatsapp-container--show');
        }, timeAnimClose);
        activeChat = false;
    }
    else
    {
        whatsappContainer.classList.toggle('whatsapp-container--show');
        activeChat = true;
        setTimeout(() => {
            whatsappMessage.focus();
        }, timeAnimClose);
    }

    whatsappBox.classList.toggle('whatsapp-box--show');
});

whatsappClose.addEventListener('click', (e) => {
    setTimeout(() => {
        whatsappContainer.classList.toggle('whatsapp-container--show');
    }, timeAnimClose);
    whatsappBox.classList.toggle('whatsapp-box--show');
    activeChat = false;
});

whatsappSend.addEventListener('click', (e) => {
    let message = whatsappMessage.value;
    message = message.replace(/ /gi, '%20');

    // let url = 'https://web.whatsapp.com/send?phone=51992112641&text=' + message;
    let url = 'https://web.whatsapp.com/send?phone=51972284683&text=' + message;
    whatsappSend.setAttribute('href', url);
});
