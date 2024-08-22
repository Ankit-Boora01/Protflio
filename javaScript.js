const aboutPopUp = document.querySelector('.about-popup');
const body = document.body;

function openPopUp() {
    aboutPopUp.classList.add('open-popup');
    body.style.overflow = 'hidden'; 
    
    aboutPopUp.addEventListener('click', (event)=>{
        if (!aboutPopUp.contains(event.target)) {
            closePopUp();
        }

    });
}

function closePopUp() {
    aboutPopUp.classList.remove('open-popup');
    body.style.overflow = ''; 
    
}
