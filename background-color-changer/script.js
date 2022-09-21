
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomColorNumber = getRandomNumber();
    document.body.style.backgroundColor = randomColorNumber;
    color.textContent = randomColorNumber;
});

function getRandomNumber() { 
    let randomColor = '#';
    for(let i=0; i<6; i++) {
        randomColor += hexColor[Math.floor(Math.random()*hexColor.length)];
    }
    return randomColor;
}
