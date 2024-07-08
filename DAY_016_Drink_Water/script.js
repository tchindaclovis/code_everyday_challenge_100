let smallCups = document.querySelectorAll('.cup-small');
let liters = document.getElementById('liters');
let percentage = document.getElementById('percentage');
let remained = document.getElementById('remained');

updateBigCup()

smallCups.forEach((cup,idx) => {
  cup.addEventListener('click', ()=> {
    highlightCups(idx)
  })
})


  function highlightCups(idx){
      if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
      }

    smallCups.forEach((cup,idx2) => {
      if(idx2 <= idx){
        cup.classList.add('full')
      } else{
        cup.classList.remove('full')
      }
    })

    updateBigCup()
  }

function updateBigCup(){
  let fullCups = document.querySelectorAll('.cup-small.full').length

  let totalCups = smallCups.length
  
  if(fullCups === 0){
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups)*500}px`
    percentage.innerText = `${(fullCups / totalCups)*100}%`
  }

  if(fullCups === totalCups){
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${4-(250*fullCups/1000)} Liters`
  }
}





// les trois écritures sont équivalentes
/*toggle.addEventListener('click',() => {
  nav.classList.toggle('active')
})*/

/*toggle.addEventListener('click',() => nav.classList.toggle('active')
)*/

