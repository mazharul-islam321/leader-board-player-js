// title color changing
const title = document.getElementsByClassName("section-title");
for (let titleColor of title) {
    titleColor.style.color = "rgba(126, 239, 34, 0.7)";
}
// all player background color change
const player = document.getElementsByClassName("player");
for (let playerBgColor of player) {
    playerBgColor.style.backgroundColor = "rgba(167, 163, 249, 0.7)";
    playerBgColor.style.borderRadius = "20px";
    playerBgColor.style.padding = "5px";
}

// list item insertion
document.getElementById("input-event").addEventListener("click", function () {
    const inputText = document.getElementById("input-text");
    const inputvalue = inputText.value;
    // validation for number and space
    if (isNaN(inputvalue) == false) {
        inputText.style.borderColor = "red";
        inputText.value = "";
        inputText.setAttribute("placeHolder", "please enter a name");
    } else {
        const li = document.createElement("li");
        li.innerText = inputvalue;
        const x = document.getElementById("nameli");
        x.appendChild(li);
        inputText.value = "";
    }
});
// delegation
document.getElementById("nameli").addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
});

// increment button
document.getElementById("increment").addEventListener("click", function () {
    const incrementText = document.getElementById("input-value");
    const incrementValue = parseInt(incrementText.value);
    const number = incrementValue + 1;
    incrementText.value = number;
    if (number == 5) {
        const disableButton = document.getElementById("increment");
        disableButton.setAttribute("disabled", true);
        disableButton.style.background = "white";
        disableButton.style.color = "black";
    }
});
