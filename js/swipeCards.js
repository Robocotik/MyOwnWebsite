let nextBtn = document.querySelector('#btn__next__card');
let prevBtn = document.querySelector('#btn__prev__card');
//console.log(nextBtn)

//if (!(nextBtn && prevBtn)) return;

nextBtn.addEventListener('click', swipeToNext);
prevBtn.addEventListener('click', swipeToPrev);

var curPage = 1;
var maxCountPage = 5;
function swipeToNext(){
    if (curPage < maxCountPage){
        let curCard = document.querySelector("#card" + curPage)
        curCard.classList.remove("active")
        curPage++;
        let swipedCard = document.querySelector("#card" + curPage)
        swipedCard.classList.add("active")
    }
}

function swipeToPrev(){
    if (curPage > 1){
        let curCard = document.querySelector("#card" + curPage)
        curCard.classList.remove("active")
        curPage--;
        let swipedCard = document.querySelector("#card" + curPage)
        swipedCard.classList.add("active")
    }
}


