const button = document.getElementById("btn");
const colorText = document.getElementById("colorCode");

button.addEventListener("click", () => {
    getColorUsingAxios();
});

function getColorUsingAxios() {
    axios.get("https://www.thecolorapi.com/random")
        .then(response => {
            const colorHex = response.data.hex.value;
            const colorName = response.data.name.value;

            document.body.style.backgroundColor = colorHex;
            colorText.textContent = `Color: ${colorHex} (${colorName})`;
        })
        .catch(error => {
            console.error("API Error:", error);
            colorText.textContent = "Failed to load color";
        });
}
