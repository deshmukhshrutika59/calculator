document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("screen");
    const buttons = document.querySelectorAll(".btn-number, .btn-operator");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            handleButtonInput(buttonText);
        });
    });
    function handleButtonInput(input) {
        if (input === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (input === "AC") {
            display.value = "";
        } else if (input === "x^y") {
            display.value += "**";
        } else if (input === "x!") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = factorial(num);
            } else {
                display.value = "Invalid input";
            }
        } else if (input === "√") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = Math.sqrt(num);
            } else {
                display.value = "Invalid input";
            }
        } else if (input === "log") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = Math.log10(num);
            } else {
                display.value = "Invalid input";
            }
        } else if (input === "ln") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = Math.log(num);
            } else {
                display.value = "Invalid input";
            }
        } else if (input === "tan") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = Math.tan(num);
            } else {
                display.value = "Invalid input";
            }
        } else if (input === "sin") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = Math.sin(num);
            } else {
                display.value = "Invalid input";
            }
        } else if (input === "cos") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = Math.cos(num);
            } else {
                display.value = "Invalid input";
            }
        } else if (input === "pi") {
            display.value += Math.PI;
        } else if (input === "e") {
            display.value += Math.E;
        } else if (input === "%") {
            const num = parseFloat(display.value);
            if (!isNaN(num)) {
                display.value = num / 100;
            } else {
                display.value = "Invalid input";
            }
        } else {
            display.value += input;
        }
    }
    function evaluateExpression(expr) {
        try {
            return Function('"use strict";return (' + expr + ')')();
        } catch (error) {
            return "Error";
        }
    }
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
});
