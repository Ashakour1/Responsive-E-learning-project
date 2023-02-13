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

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "engshakrayare114@gmail.com",
        Password : "@Abdi190$",
        To : 'engshakrayare114@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact from dugsiiye",
        Body : "Name" + document.getElementById("name").value + "<br> Email"
    }).then(
      message => alert(message)
    );
}