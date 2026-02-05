const button = document.getElementById("btn");
const colorText = document.getElementById("colorCode");

button.addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorText.textContent = "Color: " + randomColor;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}
