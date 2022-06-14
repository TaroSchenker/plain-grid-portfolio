let menu = document.querySelector('nav ul')
let hamburger = document.querySelector('nav .mobile')
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show')
})
