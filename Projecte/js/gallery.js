

const btnCierra = document.querySelector('#button-tancar');
const btnAdelanta = document.querySelector('#button-adelantar');
const btnRetrocede = document.querySelector('#button-retrocedir');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenidor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;


const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});


btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);


const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);