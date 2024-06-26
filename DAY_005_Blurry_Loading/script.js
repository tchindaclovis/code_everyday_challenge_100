
let loadText = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');


let load = 0;
let int = setInterval(burring,30)

function burring(){
    load++

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(0,100,1,0)
    bg.style.filter = `blur(${scale(load,0 ,100, 30, 0)}px)`
}

/*fonction pour ramener l'opacité de 1 à 0*/
let scale = (num, in_min, in_max, out_min, out_max) => {
    return((num-in_min)*(out_max-out_min)) / (in_max-in_min) + out_min
}
