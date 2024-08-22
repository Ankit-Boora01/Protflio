const aboutPopUp = document.querySelector('.about-popup');
const body = document.body;

function openPopUp() {
    aboutPopUp.classList.add('open-popup');
    body.style.overflow = 'hidden'; 
    
}


function closePopUp() {
    aboutPopUp.classList.remove('open-popup');
    body.style.overflow = ''; 
    
}

function notice(){
    alert('Sorry, I did not connect my Insta ID.')
}
