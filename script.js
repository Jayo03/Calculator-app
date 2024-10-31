const previousInput = document.querySelector(".previous-input");
const currentInput = document.querySelector(".current-input");

function calculate() {
    let expression = previousInput.value + currentInput.value;
    let result;

    try {
        // Handle scientific operations
        if (expression.includes("sin")) {
            result = Math.sin(parseFloat(currentInput.value));
        } else if (expression.includes("e")) {
            result = Math.exp(parseFloat(currentInput.value));
        } else if (expression.includes("tan")) {
            result = Math.tan(parseFloat(currentInput.value));
        } else if (expression.includes("log")) {
            result = Math.log10(parseFloat(currentInput.value));
        } else if (expression.includes("sqrt")) {
            result = Math.sqrt(parseFloat(currentInput.value));
        } else if (expression.includes("^")) {
            let [base, exponent] = currentInput.value.split("µ");
            result = Math.pow(parseFloat(base), parseFloat(exponent));
        } else {
            // Standard arithmetic calculation
            result = eval(expression);
        }

        currentInput.value = result;
        previousInput.value = "";
    } catch (error) {
        currentInput.value = "Error";
    }
}

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener("click", function() {
        let val = button.value;
        
        if (val === "Ac") {
            // Clear all inputs
            previousInput.value = "";
            currentInput.value = "";
        } else if (val === "⌫") {
            // Backspace function: Remove last character
            currentInput.value = currentInput.value.slice(0, -1);
        } else if (["/", "+", "-", "*", "sin", "deg", "e", "µ"].includes(val)) {
            if (currentInput.value !== "") {
                previousInput.value = `${val}(${currentInput.value})`;
                currentInput.value = "";
            } else {
                previousInput.value = val;
            }
        } else if (val === "=") {
            calculate();
        } else {
            currentInput.value += val;
        }
    });
});

window.addEventListener("keydown", function(event) {
    let key = event.key;
    if (!isNaN(key) || ["/", "+", "-", "*", "."].includes(key)) {
        currentInput.value += key; // Append the key to the current input.
    }
    if (key === "Enter") {
        calculate();
    }
});
