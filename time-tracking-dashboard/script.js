const btns = document.querySelectorAll('button');
const dailyCards = document.querySelectorAll('.daily-card')
const weeklyCards = document.querySelectorAll('.weekly-card')
const monthlyCards = document.querySelectorAll('.monthly-card')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const btnClick = e.currentTarget;

        //for daily cards
        dailyCards.forEach(function(dailyCard) {
            if(btnClick.textContent === 'daily') {
                dailyCard.classList.add('show');
            } else {
                dailyCard.classList.remove('show');
            }
        })

        //for weekly cards
        weeklyCards.forEach(function(weeklyCard) {
            if(btnClick.textContent === 'weekly') {
                weeklyCard.classList.add('show');
            } else {
                weeklyCard.classList.remove('show');
            }
        })

        //for monthly cards
        monthlyCards.forEach(function(monthlyCard) {
            if(btnClick.textContent === 'monthly') {
                monthlyCard.classList.add('show');
            } else {
                monthlyCard.classList.remove('show');
            }
        })
    })
})
