let tagsEl = document.getElementById('tags')
let textarea = document.getElementById('textarea')
textarea.focus()

textarea.addEventListener('keyup', (e) => {
createTags(e.target.value)

    if(e.key === 'Enter'){
      setTimeout(() => {
        e.target.value = ''
      }, 10)

     randomSelect() 
    }

})


function createTags(input){
  let tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

tagsEl.innerHTML = ''
tags.forEach(tag => {
  let tagEl = document.createElement('span')
  tagEl.classList.add('tag')
  tagEl.innerText = tag
  tagsEl.appendChild(tagEl)
});
}

function randomSelect(){
  let times = 30
  let interval = setInterval(() =>{
    let randomTag = pickRandomTag()

    highlightTag(randomTag)
    setTimeout(() =>{
      unHighlightTag(randomTag)
    }, 100)

  }, 100);

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      let randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100);

  }, times * 100)

}


function pickRandomTag(){
  let tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]

}

function highlightTag(tag){
  tag.classList.add('highlight')
}

function unHighlightTag(tag){
  tag.classList.remove('highlight')
}
