const aboutPopUp = document.querySelector('.about-popup');
const typingSpace = document.querySelector('#typing');

const wordList = ['Front-end.', 'JavaScript.', 'Angular.','Responsiveness.','Web Sites.'];
let wordIndex = 0;
let characterLength = 0;
let skipUpdate = 0;
let reverseType = false;

function autoTyping(wordList,element){
const intervalId = setInterval(() => {
    if(skipUpdate){
        skipUpdate--
        return
    }
    if (!reverseType) {
        skipUpdate=1;
        element.innerHTML = element.innerHTML + wordList[wordIndex][characterLength];
        characterLength++;
    } else {
        element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length - 1);
        characterLength--;
    }

    if (characterLength === wordList[wordIndex].length) {
        skipUpdate = 6;
        reverseType = true;
    }

    if (reverseType && element.innerHTML.length === 0) {
        reverseType = false;
        wordIndex++;
        if (wordIndex === wordList.length) {
            wordIndex = 0;
        }
    }
}, 200);
}

autoTyping(wordList,typingSpace);

function openPopUp() {
    aboutPopUp.classList.add('open-popup');
}

function closePopUp() {
    aboutPopUp.classList.remove('open-popup');
}

function notice() {
    alert('Sorry, I did not connect my Insta ID.');
}
