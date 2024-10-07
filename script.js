document.addEventListener('DOMContentLoaded', function() {
    let fadeElements = document.querySelectorAll('.fade-in');
    
    window.addEventListener('scroll', function() {
        fadeElements.forEach(function(element) {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    });
});
