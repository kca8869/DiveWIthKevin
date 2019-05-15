var navbar=document.getElementById('header-nav');
var navbarList=document.querySelector(".header-nav_list")
var header=document.getElementById('header');
var modal=document.getElementById('modal');
var modalImg=document.getElementById('modal__img');
var modalDis=false;
var mobileBar=document.querySelector(".mobile-bars");
modal.style.display="none";

mobileBar.onclick=function () {
  this.classList.toggle("bgtransparent");

  if (navbar.style.top==="0px") {
    navbar.style.top="-100%";
  }else{
    navbar.style.top=0;

  }
}
window.addEventListener("resize",function () {
  console.log(window.innerwidth)
  if (window.innerWidth>600) {
    navbar.style.top=0;
  }else{
    navbar.style.top="-100%";
  }
});

window.addEventListener("scroll",function (e) {
    if (window.scrollY>100) {
      navbar.style.backgroundColor="rgba(255,255,255,.5)";
    //  navbar.style.color="#5899E2";
    }else{
      navbar.style.backgroundColor="transparent";
    }
})

modal.addEventListener("click",function () {
  if (modalDis) {
    modal.style.display="none";
    modalDis=false;
  }
})

var cardImgs=document.getElementsByClassName('card__img');
for (var i = 0; i < cardImgs.length; i++) {
  cardImgs[i].onclick=function() {
    modal.style.display="block";
    modalImg.src=this.src;
    modalDis=true;
  }
}
