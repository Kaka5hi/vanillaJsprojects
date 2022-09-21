// 3 methods are defined to achieve the same goal

// 1. Simple one
/*
const openBtn = document.querySelector('.open-btn');
const answer = document.querySelector('.answer')

openBtn.addEventListener('click', function() {
    answer.classList.toggle('.show')
})
*/

// 2. By traversing the DOM
/*
//first select all buttons
const openBtns = document.querySelectorAll('.open-btn');

//loop over them using forEach method
openBtns.forEach(function(openBtn) {
    openBtn.addEventListener('click', function(e) {
        const questionContainer = e.currentTarget.parentElement.parentElement

        questionContainer.classList.toggle('answer-show')
    })
})
*/


// 3. Using selectors inside the element

//In this we will target question div instead of button
const questions = document.querySelectorAll('.question');

//loop over questions
questions.forEach(function(question) {
   //target button element inside question div
   const btn = question.querySelector('.open-btn');
   //add eventlistener on button and toggle class
   btn.addEventListener('click', function() {
       question.classList.toggle('show-answer');
   });
});
