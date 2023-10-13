let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

let percentage = document.getElementById('percentage');
let ce = document.getElementById('ce');
let c = document.getElementById('c');
let deleteOne = document.getElementById('delete');
let pow = document.getElementById('pow');
let sqrt = document.getElementById('sqrt');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let swap = document.getElementById('swap');
let dot = document.getElementById('dot');
let equals = document.getElementById('equals');
let pow3 = document.getElementById('pow3');

let history = document.getElementById('history');
let result = document.getElementById('result');

const buttons = [zero, one, two, three, four, five, six, seven, eight, nine, percentage];

function calculate(number1, number2) {
    let historyValue = `${history.value}`;
    let plus = ' +';
    let minus = ' -';
    let multiply = ' *';
    let divide = ' /';
    let sqrt = ' %';
    if (history.value != '' && result.value != null) {
        if (historyValue.includes(plus)) {
            result.value = parseFloat(number1) + parseFloat(number2);
        } else if (historyValue.includes(minus)) {
            result.value = parseFloat(number1) - parseFloat(number2);
        } else if (historyValue.includes(multiply)) {
            result.value = parseFloat(number1) * parseFloat(number2);
        } else if (historyValue.includes(divide)) {
            result.value = parseFloat(number1) / parseFloat(number2);
        } else if (historyValue.includes(sqrt)) {
            result.value = (parseFloat(number1) * parseFloat(number2)) / 100;
        } else {
            history.value = result.value;
        }
    }
    return result.value;
}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        result.value += event.currentTarget.value;
    });
}

deleteOne.addEventListener('click', () => {
    let currentValue = result.value;
    if (currentValue.length > 0) {
        let newValue = currentValue.slice(0, -1);
        result.value = newValue;
    }
});

ce.addEventListener('click', () => {
    result.value = '';
});

c.addEventListener('click', () => {
    result.value = '';
    history.value = '';
});

pow.addEventListener('click', () => {
    let currentValue = calculate(history.value, result.value);
    let newValue = Math.pow(currentValue, 2);
    result.value = newValue;
    history.value = `${currentValue}^2`;
});

pow3.addEventListener('click', () => {
    let currentValue = calculate(history.value, result.value);
    let newValue = Math.pow(currentValue, 3);
    result.value = newValue;
    history.value = `${currentValue}^3`;
});

sqrt.addEventListener('click', () => {
    let currentValue = calculate(history.value, result.value);
    let newValue = Math.sqrt(currentValue);
    result.value = newValue;
    history.value = `√ ${currentValue}`;
});

plus.addEventListener('click', () => {
    if (history.value != '' && result.value != '') {
        history.value = `${calculate(history.value, result.value)} + `;
    } else if (result.value != '') {
        history.value = `${result.value} + `;
    }
    result.value = '';
});

minus.addEventListener('click', () => {
    if (history.value != '' && result.value != '') {
        history.value = `${calculate(history.value, result.value)} - `;
    } else if (result.value != '') {
        history.value = `${result.value} - `;
    }
    result.value = '';
});

multiply.addEventListener('click', () => {
    if (history.value != '' && result.value != '') {
        history.value = `${calculate(history.value, result.value)} * `;
    } else if (result.value != '') {
        history.value = `${result.value} * `;
    }
    result.value = '';
});

divide.addEventListener('click', () => {
    if (history.value != '' && result.value != '') {
        history.value = `${calculate(history.value, result.value)} / `;
    } else if (result.value != '') {
        history.value = `${result.value} / `;
    }
    result.value = '';
});

percentage.addEventListener('click', () => {
    if (history.value != '' && result.value != '') {
        history.value = `${calculate(history.value, result.value)} % `;
    } else if (result.value != '') {
        history.value = `${result.value} % `;
    }
    result.value = '';
});

swap.addEventListener('click', () => {
    result.value = `${-result.value}`;
});

dot.addEventListener('click', function (event) {
    let resultValue = `${result.value}`;
    let dot = ".";
    if (!resultValue.includes(dot)) {
        result.value += event.currentTarget.value;
    }
});

equals.addEventListener('click', () => {
    if (history.value != '' && result.value != '') {
        calculate(history.value, result.value);
        history.value = result.value;
    }
});

ans.addEventListener("click", ()=> {

})