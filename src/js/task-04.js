
const counter = document.querySelector('#counter');
const counterValueElement = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action=decrement]');
const incrementButton = document.querySelector('[data-action=increment]');

let counterValue = 0;

decrementButton.addEventListener("click", () => {
    counterValue --;
    counterValueElement.textContent = counterValue;
console.log(counterValue);
});

incrementButton.addEventListener("click", () => {
    counterValue ++;
    counterValueElement.textContent = counterValue;
console.log(counterValue);
});
