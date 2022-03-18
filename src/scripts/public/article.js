const galeria = document.querySelector('.articulos-galeria');
const mainImage = document.getElementById('main-image');
const fullImage = document.getElementById('full-image');
let actualImagen = document.querySelector('.img-data-src.actual-imagen');

if (galeria)
{
    galeria.addEventListener('click', (e) => {
        let element = e.target;

        if (element.tagName === 'IMG')
        {
            let data = element.dataset;

            mainImage.setAttribute('src', data.src);
            actualImagen.classList.remove('actual-imagen');
            element.classList.add('actual-imagen');
            actualImagen = element;

            fullImage.setAttribute('src', data.srcfull);
        }
    });
}

/******************************************************************************/

const dotsMobile = document.querySelectorAll('.dot-mobile');
const articuloImages = document.querySelectorAll('.articulo-mobile');

if (dotsMobile.length)
{
    let actualImage = articuloImages[0];
    let actualDot = dotsMobile[0];
    let srcData = actualImage.dataset.src;

    actualImage.classList.toggle('articulo-mobile--show');
    actualDot.classList.toggle('dot-mobile--active');
    fullImage.setAttribute('src', srcData);

    dotsMobile.forEach( (dot, index) => {
        dot.addEventListener('click', (e) => {
            let element = articuloImages[index];

            if (actualImage !== element)
            {
                actualImage.classList.toggle('articulo-mobile--show');
                actualImage = element;
                actualImage.classList.toggle('articulo-mobile--show');

                actualDot.classList.toggle('dot-mobile--active');
                actualDot = dot;
                actualDot.classList.toggle('dot-mobile--active');

                srcData = actualImage.dataset.src;
                fullImage.setAttribute('src', srcData);
            }
        });
    });
}

/******************************************************************************/

const articuloBtn = document.querySelector('.articulo-btn');
const modalArticle = document.getElementById('modal-article');

if (articuloBtn)
{
    articuloBtn.addEventListener('click', (e) => {
        modalArticle.classList.toggle('active-modal');
    });
}
