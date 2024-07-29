 // JavaScript para cambiar el color del header al hacer scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Cambia este valor según cuándo quieras que cambie el color
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


/*CONFIGURATION SLIDER BUILDPRO*/
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.sliderBuildPro');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let autoScrollInterval;
    const imgWidth = slider.querySelector('img').clientWidth; // Tamaño de una imagen
    const autoScrollDelay = 4000; // Tiempo para reiniciar el auto-scroll (3 segundos)
    let autoScrollTimeout;

    // Función para iniciar el auto-scroll
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            slider.scrollBy({ left: imgWidth, behavior: 'smooth' });
        }, autoScrollDelay);
    };

    // Función para detener el auto-scroll
    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
        clearTimeout(autoScrollTimeout); // Limpiar cualquier timeout pendiente
    };

    // Función para reiniciar el auto-scroll después de un período de inactividad
    const resetAutoScroll = () => {
        stopAutoScroll(); // Detener el auto-scroll actual
        autoScrollTimeout = setTimeout(startAutoScroll, autoScrollDelay); // Reiniciar el auto-scroll después del retraso
    };

    // Inicia el auto-scroll al cargar
    startAutoScroll();

    // Botones de navegación
    prevButton.addEventListener('click', () => {
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
        slider.scrollBy({ left: -imgWidth, behavior: 'smooth' });
        resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
    });

    nextButton.addEventListener('click', () => {
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
        slider.scrollBy({ left: imgWidth, behavior: 'smooth' });
        resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
    });

    // Desplazamiento con arrastre del mouse
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
    });

    slider.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
        }
    });

    slider.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
        }
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad del deslizamiento
        slider.scrollLeft = scrollLeft - walk;
    });
});


/*CONFIGURATION MUSICLIFE */ 

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.sliderMusicLife');
    const prevButton = document.querySelector('.prevMusicLife');
    const nextButton = document.querySelector('.nextMusicLife');

    let autoScrollInterval;
    const imgWidth = slider.querySelector('img').clientWidth; // Tamaño de una imagen
    const autoScrollDelay = 4000; // Tiempo para reiniciar el auto-scroll (3 segundos)
    let autoScrollTimeout;

    // Función para iniciar el auto-scroll
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            slider.scrollBy({ left: imgWidth, behavior: 'smooth' });
        }, autoScrollDelay);
    };

    // Función para detener el auto-scroll
    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
        clearTimeout(autoScrollTimeout); // Limpiar cualquier timeout pendiente
    };

    // Función para reiniciar el auto-scroll después de un período de inactividad
    const resetAutoScroll = () => {
        stopAutoScroll(); // Detener el auto-scroll actual
        autoScrollTimeout = setTimeout(startAutoScroll, autoScrollDelay); // Reiniciar el auto-scroll después del retraso
    };

    // Inicia el auto-scroll al cargar
    startAutoScroll();

    // Botones de navegación
    prevButton.addEventListener('click', () => {
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
        slider.scrollBy({ left: -imgWidth, behavior: 'smooth' });
        resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
    });

    nextButton.addEventListener('click', () => {
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
        slider.scrollBy({ left: imgWidth, behavior: 'smooth' });
        resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
    });

    // Desplazamiento con arrastre del mouse
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
    });

    slider.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
        }
    });

    slider.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
        }
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad del deslizamiento
        slider.scrollLeft = scrollLeft - walk;
    });
});


/*CONFIGURATION PORTFOLIO */ 

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.sliderImgPortfolio');
    const prevButton = document.querySelector('.btnPrev_PF');
    const nextButton = document.querySelector('.btnNext_PF');

    let autoScrollInterval;
    const imgWidth = slider.querySelector('img').clientWidth; // Tamaño de una imagen
    const autoScrollDelay = 4000; // Tiempo para reiniciar el auto-scroll (3 segundos)
    let autoScrollTimeout;

    // Función para iniciar el auto-scroll
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            slider.scrollBy({ left: imgWidth, behavior: 'smooth' });
        }, autoScrollDelay);
    };

    // Función para detener el auto-scroll
    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
        clearTimeout(autoScrollTimeout); // Limpiar cualquier timeout pendiente
    };

    // Función para reiniciar el auto-scroll después de un período de inactividad
    const resetAutoScroll = () => {
        stopAutoScroll(); // Detener el auto-scroll actual
        autoScrollTimeout = setTimeout(startAutoScroll, autoScrollDelay); // Reiniciar el auto-scroll después del retraso
    };

    // Inicia el auto-scroll al cargar
    startAutoScroll();

    // Botones de navegación
    prevButton.addEventListener('click', () => {
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
        slider.scrollBy({ left: -imgWidth, behavior: 'smooth' });
        resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
    });

    nextButton.addEventListener('click', () => {
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
        slider.scrollBy({ left: imgWidth, behavior: 'smooth' });
        resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
    });

    // Desplazamiento con arrastre del mouse
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        stopAutoScroll(); // Detener el auto-scroll al interactuar manualmente
    });

    slider.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
        }
    });

    slider.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
            resetAutoScroll(); // Reiniciar el auto-scroll después de 3 segundos de inactividad
        }
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad del deslizamiento
        slider.scrollLeft = scrollLeft - walk;
    });
});
