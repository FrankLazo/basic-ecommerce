const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.mySlide');
const dots = document.querySelectorAll('.dot');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let activeSlide = slides[0];
let activeDot = dots[0];
let slideIndex = 1;
let myTimer;

if (slideshowContainer)
{
    window.addEventListener("DOMContentLoaded", (e) => {
        activeSlide.style.opacity = '1';
        activeDot.classList.add('active-dot');

        myTimer = setInterval( () => {
            plusSlides(1);
        }, 3000);

        slideshowContainer.addEventListener('mouseenter', pause);
        slideshowContainer.addEventListener('mousemove', pause);
        slideshowContainer.addEventListener('mouseleave', resume);
    });

    prevBtn.addEventListener('click', () => {
        plusSlides(-1);
    });

    nextBtn.addEventListener('click', () => {
        plusSlides(1);
    });

    // avanza o retrocede el slide

    function plusSlides(n)
    {
        clearInterval (myTimer);

        if (n < 0)
        {
            slideIndex = showSlides (--slideIndex);
        }
        else
        {
            slideIndex = showSlides (++slideIndex);
        }

        if (n === -1)
        {
            myTimer = setInterval( () => {
                plusSlides(n + 2);
            }, 3000);
        }
        else
        {
            myTimer = setInterval( () => {
                plusSlides(n);
            }, 3000);
        }
    }

    // oculta y actualiza la imagen y dot actual

    function showSlides(index)
    {
        if (index > slides.length)
        {
            index = 1;
        }

        if (index < 1)
        {
            index = slides.length;
        }

        activeSlide.style.opacity = '0';
        activeSlide = slides[index - 1];
        activeSlide.style.opacity = '1';

        activeDot.classList.remove('active-dot');
        activeDot = dots[index - 1];
        activeDot.classList.add('active-dot');

        return index;
    }

    // detener y reanudar el carousel con el mouse

    function pause()
    {
        clearInterval(myTimer);
    }

    function resume()
    {
        clearInterval(myTimer);
        myTimer = setInterval( () => {
            plusSlides(slideIndex)
        }, 3000);
    }


    // control de los botones

    dots.forEach( (dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(myTimer);

            myTimer = setInterval( () => {
                plusSlides(1);
            }, 3000);

            slideIndex = showSlides(index + 1);
        });
    });
}
