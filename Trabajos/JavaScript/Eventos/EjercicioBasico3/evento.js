const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener( "click", () => {
    text.addEventListener("keyup", (event) => {
        console.log(event.key);
    });
});