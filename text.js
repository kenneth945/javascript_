let clickCount = 0;

function clickfunction() {
    clickCount++;
    document.getElementById("click-counter").innerHTML =   `Button clicked: ${clickCount} times;`
}