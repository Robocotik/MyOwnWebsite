let nextBtn = document.querySelector('#btn__next__card');
let prevBtn = document.querySelector('#btn__prev__card');
//console.log(nextBtn)

//if (!(nextBtn && prevBtn)) return;

nextBtn.addEventListener('click', swipeToNext);
prevBtn.addEventListener('click', swipeToPrev);

var curPage = 1;
var maxCountPage = 5;
var animDuration = 600 //0.5s
var animActive = 0

function doAnimUnactive(){
    animActive = 0
}

function downScaleOpacityAnim(){
    animActive = 1
    let curCard = document.querySelector(".active")
    curCard.style.opacity = "0"
    curCard.style.transition = animDuration/1000 + 's'
    
}

function upScaleOpacityAnim(){
    let curCard = document.querySelector(".active")
    curCard.style.opacity = "1"
    curCard.style.transition = animDuration/1000 + 's'
    setTimeout(doAnimUnactive,50)
    
}

function doSwipe_next(){
    let curCard = document.querySelector("#card" + curPage)
    curCard.classList.remove("active")
    curPage++;
    let swipedCard = document.querySelector("#card" + curPage)
    swipedCard.classList.add("active")
    swipedCard.style.opacity = "0"
}

function doSwipe_prev(){
    let curCard = document.querySelector("#card" + curPage)
    curCard.classList.remove("active")
    curPage--;
    let swipedCard = document.querySelector("#card" + curPage)
    swipedCard.classList.add("active")
    swipedCard.style.opacity = "0"
}

function swipeToNext(){
    if(animActive){ 
        console.log("anim is going")
        return false;
        
    }
    if (curPage < maxCountPage){
        downScaleOpacityAnim();
        setTimeout(doSwipe_next,animDuration);
        setTimeout(upScaleOpacityAnim,animDuration+ 50);

    }
}

function swipeToPrev(){
    if(animActive){ 
        console.log("anim is going")
        return false;
        
    }
    if (curPage > 1){
        downScaleOpacityAnim();
        setTimeout(doSwipe_prev,animDuration);
        setTimeout(upScaleOpacityAnim,animDuration + 50);
    }
}


