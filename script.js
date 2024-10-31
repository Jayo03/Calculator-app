const previuousInput = document.querySelector(".previous-input");
const currentInput = document.querySelector(".current-input");


function dis(val) {
    if (["/", "+","-","*"].includes(val)){
        if(currentInput.value !== ''){
            previuousInput.value = currentInput.value + "" + val; 
            //move current value to previous value
            currentInput.value = ""; //clear value
        }
    } else {
        currentInput.value += val;
    } else {
        currentInput.value += val;
    }
}


function calculate(){
    let expression = previuousInput + currentInput;
}





// Function to handle keyboard input
function myFunction(event) {
    let key = event.key;
    if (!isNaN(key) || ['/', '+', '-', '*', '.'].includes(key)) {
        dis(key);
    }
    if (key === 'Enter') {
        calculate();
    }
}




// add click events
document.querySelectorAll("input[type="button"]").forEach(button => {
    button.addEventListener("click", function(){
        dis(button.value);
    });
});

window.addEventListener("keydown",myFunction);