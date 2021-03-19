//Fucking Header scroll
$(document).ready(()=>{
    $(window).scroll(()=>{
        if($(window).scrollTop()>0){
            $('header').addClass('change-header');
        } else{
            $('header').removeClass('change-header');
        }
    })
})

//Fucking boxes text

let box = document.querySelectorAll('.sec2-box');
box.forEach(item => {
    item.addEventListener('click', ()=>{
        let indicatorClass = document.querySelector('.sec2-full')
        if(!indicatorClass){
            item.lastElementChild.innerHTML = "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English. Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A Search For 'Lorem Ipsum' Will Uncover Many Web Sites Still In Their Infancy. Various Versions Have Evolved Over The Years, Sometimes By Accident, Sometimes On Purpose (Injected Humour And The Like).";
            item.classList.add('sec2-full');
        } else{
            item.lastElementChild.innerHTML = "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using 'Content Here, Content Here', Making It Look Like Readable English.";
            item.classList.remove("sec2-full");
        }
    })
});

//Fucking slider
const wholeSlider=document.querySelector('.sec5-imgs');
const slider=document.querySelectorAll('.sec5-imgs img');
const btnleft=document.querySelector('.slider__btn--left');
const btnright=document.querySelector('.slider__btn--right');
let current=0;
let maxslide=slider.length-1;

function sliding(){
        slider.forEach((items, index)=>{
        items.style.transform=`translate(${40 * (index-current)}%)`;
    })
}

sliding();

const arrowBtn=document.querySelectorAll('.slider__btn');
arrowBtn.forEach((item) => item.addEventListener('click', ()=>{
        if(item.classList.contains('slider__btn--left')){
            if(current==0){
                    current=maxslide;
                }else{
                    current--;
                }
            sliding();
        } 
        else if(item.classList.contains('slider__btn--right')){
            if(current==maxslide){
                current=0;
            }else{
                current++;
            }
            sliding();
        }
    })
);