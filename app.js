
const inputElement = document.querySelector('#textfield input');
const remainingChar = document.querySelector('#remaining-char');




let maxAllowedChar =  inputElement.maxLength;
function retrieveInput (event) {
   
    let enteredText = event.target.value;
    let textLength =  enteredText.length;
    let remainingText = maxAllowedChar - textLength;

    remainingChar.textContent = remainingText ;

    if(remainingText === 0){
        remainingChar.classList.add('error');
        inputElement.classList.add('error') ;
    }
    else if(remainingText <= 10){
        remainingChar.classList.add('warning');
        inputElement.classList.add('warning') ;
        remainingChar.classList.remove('error');
        inputElement.classList.remove('error') ;

    }
    else{
        remainingChar.classList.remove('warning');
        inputElement.classList.remove('warning') ;
        

    }
}




inputElement.addEventListener('input', retrieveInput)


