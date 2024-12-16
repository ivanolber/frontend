let pos_actu = 0;


function verSlide(index) {
    const carru = document.getElementById('carrusel');
    const tot_slides = carru.children.length;
    if (index >= tot_slides) {
        pos_actu = 0;
    } else if (index < 0) {
        pos_actu = 0;
    } else {
        pos_actu = index;
    }
    carru.style.transform = `translateX(-${pos_actu * 100}%)`;
}

function antSlide(){
    verSlide(pos_actu - 1);
}

function sigSlide(){
    verSlide(pos_actu+1)
}

let res = 0;

function verTarjetas(dif) {
    const carru = document.getElementById('caja-juegos');
    const target = document.getElementById('tarjeta');
    const tam_tarj = target.offsetWidth;
    const tot_slides = carru.children.length; 
    const pasos = (tot_slides - 5) * tam_tarj; 
    res += dif;
    res = Math.max(0, Math.min(res, pasos)); 
    carru.style.transform = `translateX(-${res}px)`;
}

function antTarj() {
    const target = document.getElementById('tarjeta');
    const tam_tarj = target.offsetWidth;
    verTarjetas(-tam_tarj);
} 

function sigTarj() {
    const target = document.getElementById('tarjeta');
    const tam_tarj = target.offsetWidth; 
    verTarjetas(tam_tarj); 
}

setInterval(() => {
    sigSlide(); 
}, 7000); 