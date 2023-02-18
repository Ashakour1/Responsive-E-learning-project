const header = document.querySelector("header")

window.addEventListener("scroll" , ()=>{
    header.classList.toggle("sticky" , window.scrollY > 0);

});
let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.nav-bar');

menu.addEventListener("click",() => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
});

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
