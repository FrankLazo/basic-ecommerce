const locationButtons = document.querySelectorAll('.location-btn');
const locationIFrame = document.getElementById('location-iframe');
let actualLocation = document.querySelector('.actual-location');

for (let locationButton of locationButtons)
{
    locationButton.addEventListener('click', setUrl);
}

function setUrl(e)
{
    let target = e.currentTarget;
    let data = target.dataset;

    locationIFrame.setAttribute('src', data.url);
    actualLocation.classList.remove('actual-location');
    target.classList.add('actual-location');
    actualLocation = target;
}
