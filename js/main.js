const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
 if (!menuOpen){
  menuBtn.classList.add('open');
  menuOpen = true;
 } else{
  menuBtn.classList.remove('open');
  menuOpen = false;
 };
 document.querySelector(".toggle-links").classList.toggle("open");
});
 
function darktoggle(){
 document.querySelector('.dark').classList.toggle('open'); /* BODY */
 document.querySelector('.toggle').classList.toggle('dark');
 document.querySelector('.nav-items').classList.toggle('black');
 document.querySelector('.about').classList.toggle('dark');
 document.querySelector('.nav').classList.toggle('dark');
 document.querySelector('.contact').classList.toggle('dark');
 document.querySelector('.name').classList.toggle('dark');
 document.querySelector('.email').classList.toggle('dark');
 document.querySelector('.message').classList.toggle('dark');
 document.querySelector('.submit').classList.toggle('dark');
}

let date = new Date();
document.querySelector('.footer-year').innerHTML = date.getFullYear();

