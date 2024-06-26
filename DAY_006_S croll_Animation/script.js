
let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes() //affiche d'abord certains box dans la fenêtre avant le scroll

function checkBoxes(){

    let triggerBottom = window.innerHeight / 10 * 9 //pour calculer la hauteur de la fenêtre qu'on minore

    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top //on stocke dans une variable la valeur de la position relative de l'élément (top, bottom, left, rigth )
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}
