let mode=document.getElementById('mode');
let body=document.body;

mode.addEventListener('click', function(){
    let val=body.classList.toggle('white');
    localStorage.setItem('mode',val);
});

let modeValue=localStorage.getItem('mode')

if (modeValue=="true") {
    body.classList.add('white')
} else {
    body.classList.remove('white')
}

let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro--conteiner');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
       logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.add('active');
            }, (index + 1) * 100);
       });

       setTimeout(() => {
          logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.remove('active');
               span.classList.add('fade'); 
            }, (span + 1) * 50);
          });
       }, 2000);

       setTimeout(() => {
          intro.style.top  = '-250vh';
       }, 2300);

    });

});