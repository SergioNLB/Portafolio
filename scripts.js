const firstLine = " !Welcome to LaforaDev!";
const secondLine = "It's a pleasure to have you here";

let firstLineIndex = 0;
let secondLineIndex = 0;

const keyPressSound = new Audio('sounds/Key-press.wav');
keyPressSound.playbackRate = 1.0; // Ajusta este valor según sea necesario

function playSound() {
    keyPressSound.currentTime = 0;
    keyPressSound.play();
}

function writeFirstLine() {
    document.getElementById("firstLine").textContent += firstLine[firstLineIndex];
    playSound();
    firstLineIndex++;
    if (firstLineIndex < firstLine.length) {
        setTimeout(writeFirstLine, 100);
    } else {
        setTimeout(writeSecondLine, 100);
    }
}

function writeSecondLine() {
    document.getElementById("secondLine").textContent += secondLine[secondLineIndex];
    playSound();
    secondLineIndex++;
    if (secondLineIndex < secondLine.length) {
        setTimeout(writeSecondLine, 100);
    } else{
        setTimeout(clearText,2000);
    }
}
function clearText(){
    document.getElementById("firstLine").textContent="";
    document.getElementById("secondLine").textContent="";
}

window.onload = function() {
    document.getElementById("firstLine").textContent = "";
    document.getElementById("secondLine").textContent = "";
    writeFirstLine();
}


/* Funcion para Imagenes */

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'ImagenesPortafolio/img-programando2.jpg',
        'ImagenesPortafolio/img-programando.jpg',
        'ImagenesPortafolio/img-programando3.jpg'
    ];

    let currentIndex = 0;
    const introSection = document.getElementById('introSection');

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        introSection.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    setInterval(changeBackgroundImage, 5000); // Cambia la imagen cada 3 segundos

     // Asegúrate de establecer la imagen de fondo inicial
    introSection.style.backgroundImage = `url(${images[currentIndex]})`;
});

 // JavaScript para cambiar el color del header al hacer scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Cambia este valor según cuándo quieras que cambie el color
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider Configuration document.addEventListener('DOMContentLoaded', () => {document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', () => {
        const sliders = document.querySelectorAll('.slider');
        
        sliders.forEach((slider) => {
            let isDown = false;
            let startX;
            let scrollLeft;
    
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
    
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });
    
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });
    
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2; // Ajusta la velocidad del deslizamiento
                slider.scrollLeft = scrollLeft - walk;
            });
        });
    });