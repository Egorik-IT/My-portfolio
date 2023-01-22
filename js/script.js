const popup__open = document.querySelector(".about__me__button");
const popup__close = document.querySelector(".close__button");
const popup__area__close = document.querySelector(".popup__area");

popup__open.addEventListener("click", function(e){
  opening__popup();
});

function opening__popup(){
  document.querySelector(".popup").style.visibility = "visible";
  document.querySelector(".popup").style.opacity = "1";
  document.querySelector(".popup__information__container").style.marginTop = "0";
  document.body.style.overflow = "hidden";
};

popup__close.addEventListener("click", function(e){
  closing__popup();
});

function closing__popup(){
  document.querySelector(".popup").style.visibility = "hidden";
  document.querySelector(".popup").style.opacity = "0";
  document.querySelector(".popup__information__container").style.marginTop = "-3000px";
  document.body.style.overflow = "scroll";
};

popup__area__close.addEventListener("click", function(e){
  closing__popup();
});
