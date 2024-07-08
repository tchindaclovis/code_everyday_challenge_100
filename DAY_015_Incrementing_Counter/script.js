let counters = document.querySelectorAll('.counter')


// les trois écritures sont équivalentes
/*toggle.addEventListener('click',() => {
  nav.classList.toggle('active')
})*/

/*toggle.addEventListener('click',() => nav.classList.toggle('active')
)*/

counters.forEach(counter => {
  counter.innerText='0';

  let updateCounter = () => {
    let target = +counter.getAttribute('data-target')
    let c = +counter.innerText
    let increment = target / 2000
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter,1)
    } else {
      counter.innerText = target
    }
  }
   updateCounter()

})