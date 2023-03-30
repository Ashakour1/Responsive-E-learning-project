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

// form
const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const Textme = document.querySelector("textArea");
// function so mujinaayo errorka
const ShowError =(input,massage) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error'

    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const ErrorIcon = parentElement.querySelectorAll("i")[1];

    ErrorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = massage;
    
};

// Function soo muujinaayo Check 
const ShowSuccess =(input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success'

    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const ErrorIcon = parentElement.querySelectorAll("i")[1];

    ErrorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
    


};

// dry


// Function checking empty
const checkEmpty = (elements) =>{

    elements.forEach( (Element) => {
        if(Element.value === ''){
           ShowError(Element, 'input required')
        }
        else{
            ShowSuccess(Element);
        }
       
    });
};
// Declare 

const checkEmail = (Email) => {
    const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(Email.value)){
        ShowSuccess(Email);
    }else{
        ShowError(Email,"invalid Email");
    }
};



// check massage

const checkMassage = (Textme) => {
    if(textArea.value === ''){
        ShowError(Textme,"Enter Your Massage");
    } else{
        ShowSuccess(Textme)
    }
}


