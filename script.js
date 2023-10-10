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

let result = document.getElementById('result');

const buttons = [zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, dot, divide, multiply];

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        result.value += event.currentTarget.value;
    });
}

deleteOne.addEventListener('click',() => {
    let currentValue = result.value;
        if (currentValue.length > 0) {
            let newValue = currentValue.slice(0, -1);
            result.value = newValue;
        }
    });
