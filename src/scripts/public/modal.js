const secondNavbar = document.querySelector('.second-navbar');
const footerAbout = document.querySelector('.footer-about');
const modalClose = document.querySelectorAll('.modal-close');

secondNavbar.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName !== 'BUTTON')
    {
        target = target.parentElement;
    }
    showModal(target.getAttribute('id').replace('btn', 'modal'));
});

footerAbout.addEventListener('click', (e) => {
    let target = e.target;
    showModal(target.getAttribute('id').replace('footer-btn', 'modal'));
});

function showModal(selector)
{
    let modal = document.getElementById(selector);
    modal.classList.toggle('active-modal');
}

for (let iconClose of modalClose)
{
    iconClose.addEventListener('click', () => {
        let modal = document.querySelector('.active-modal');
        modal.classList.toggle('active-modal');
    });
}
