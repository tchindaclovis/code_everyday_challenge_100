let open_btn = document.querySelector('.open-btn')
let close_btn = document.querySelector('.close-btn')
let nav = document.querySelectorAll('.nav')


open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
}) 


close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
}) 