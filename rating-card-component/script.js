const submitBtn = document.getElementById('submit-btn');
const btns = document.querySelectorAll('.btn');
const finalRating = document.getElementById('final-rating');
const firstCardDisplay = document.getElementById('first-card')
const secondCardDisplay = document.getElementById('second-card')

//tracking which rating final gave
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        //accessing the content inside btn i.e rating number value
        const rating = e.currentTarget.textContent;
        finalRating.textContent = rating;
    });
});

//action on submit button
submitBtn.addEventListener('click', function() {
    firstCardDisplay.style.display = 'none';
    secondCardDisplay.style.display = 'block';
})