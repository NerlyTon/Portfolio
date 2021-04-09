const nav = document.querySelector('.navbar')
const menuBtn = document.querySelector('.menu-btn')

window.addEventListener('scroll', function(e) {
    if(this.scrollY > 20) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
    
});

menuBtn.addEventListener('click', function(e) {
    console.log(e.target)
    console.log(document.querySelector('.navbar .menu'))
    document.querySelector('.navbar .menu').classList.toggle("active")
})