const nav = document.querySelector('.navbar')
const up = document.querySelector('.scroll-up-btn')
const menuBtn = document.querySelector('.menu-btn')
// const menu = document.getElementsByClassName('.btn')


window.addEventListener('scroll', function(e) {
    if(this.scrollY > 20) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
    if(this.scrollY > 480) {
        up.classList.add('show')
    } else {
        up.classList.remove('show')
    }
});

up.addEventListener('click', function(e) {
    // console.log(e.target)
    // document.documentElement.scrollTop = 0
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

menuBtn.addEventListener('click', function(e) {
    console.log(e.target)
    console.log(document.querySelector('.navbar .menu'))
    document.querySelector('.navbar .menu').classList.toggle("active")
})

// menu.addEventListener('click', function(e) {
//     console.log(e.target)
//     console.log(document.querySelector('.navbar .menu'))
//     document.querySelector('.navbar .menu').classList.toggle("active")
// })