'use strict'

const slider = document.querySelector('.uniqueness__block-slider');
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

let index = 0;

let activeSlide = n =>{
   for(let slide of slides){
      slide.classList.remove('active');
   }
   slides[n].classList.add('active');
}

let activeDot = n =>{
   for(let dot of dots){
      dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}


const prepareCurrentSlide = ind => {
   activeSlide(ind);
   activeDot(ind);
}

let nextSlide = () =>{
   if(index == slides.length-1){
      index = 0;
      prepareCurrentSlide(index)
   } else {
      index++;
      prepareCurrentSlide(index)
   }
}

dots.forEach((item, indexDot) =>{
   item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
   });
});

const interval = setInterval(nextSlide,4000);