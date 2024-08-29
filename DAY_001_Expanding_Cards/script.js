let panels=document.querySelectorAll('.panel');

// panels.forEach(function(panel){
//     panel.addEventListener('click',mvt_flot);
//    function mvt_flot(){
//     removeActiveClasses()
//     panel.classList.add('active')
//    }
// })

// function removeActiveClasses(){
//     panels.forEach(function(panel){
//         panel.classList.remove('active')
//     })
// }


panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('active')
   })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}