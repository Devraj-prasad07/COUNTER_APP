const decrementBtn = document.getElementById("decrementBtn");
const displayValue = document.getElementById("displayValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

// For decrememt button click
decrementBtn.addEventListener("click",() => {
const value = Number(displayValue.innerText);
if(value > 0){
    displayValue.innerText = value - 1;
} else{
    alert("Negative Values are not allowed");
}
});

// For increment button click
incrementBtn.addEventListener("click",() => {
    const value = Number(displayValue.innerText);
    if(value >= 10){
        alert("Values above 10 are not allowed");
    } else{
        displayValue.innerText = value + 1;
    }
});

// For Reset Button
resetBtn.addEventListener("click",() => {
    displayValue.innerText = 0;
}); 








