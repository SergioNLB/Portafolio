 // JavaScript para cambiar el color del header al hacer scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { // Cambia este valor según cuándo quieras que cambie el color
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});