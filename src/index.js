const nav = document.querySelector('.navbar')

window.addEventListener('scroll', function(e) {
    if(this.scrollY > 20) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
    
});