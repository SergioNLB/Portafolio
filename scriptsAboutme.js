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