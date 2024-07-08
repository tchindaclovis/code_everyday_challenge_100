let toggle = document.getElementById('toggle')
let nav = document.getElementById('nav')

/*toggle.addEventListener('click',() => {
  nav.classList.toggle('active')
})*/

/*toggle.addEventListener('click',() => nav.classList.toggle('active')
)*/

toggle.addEventListener('click',function(){
  nav.classList.toggle('active')
})