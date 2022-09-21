const adviceText = document.getElementById("advice-text");
const btn = document.getElementById("button");

const container = document.querySelector('.container');
const toggleBtn = document.getElementById('toggle-btn');

btn.addEventListener("click", () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        adviceText.textContent = data.slip.advice;
    })
});

//Dark mode 
toggleBtn.addEventListener('click', function() {
    toggleBtn.parentElement.classList.toggle('dark-bg-color');
    btn.classList.toggle('dark-button-color')
    container.classList.toggle('dark-container-color')
    toggleBtn.classList.toggle('dark-button-color')
})
