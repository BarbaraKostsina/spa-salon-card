
let max = 4, n = 1;

function sliderTimer(){
    if (++n>max) n=1;
    changeSlide();
    timerId = setTimeout(timer, 4000);
}

function changeSlide(){imgId.src = `images/img${n++}.jpg`;}

function timer() {
  if (n>max) n = 1;
  changeSlide();
  timerId = setTimeout(timer, 4000);
}



