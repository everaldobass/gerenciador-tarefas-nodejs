// Pegrando todos os Sliders
let totalSlides = document.querySelectorAll('.slider--item').length;

// Iniciando o Slider
let currentSlide = 0;

// li
let sliderWidth = document.querySelector('.slider').clientWidth;


document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width =`${sliderWidth}px`;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;


 function goPrev() {
   currentSlide--;

   if(currentSlide < 0 ){

     currentSlide = totalSlides - 1;
   }

   updateMargin();

 }

 function goNext(){
   currentSlide++;

   if(currentSlide > (totalSlides-1)){
     currentSlide = 0;
   }

   updateMargin();

 }

 // Função para atualizar
 function updateMargin(){
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;

 }

 setInterval(goNext, 3000 );
 

 

