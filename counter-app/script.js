//inital count value
let count = 0;


//select
const displayValue = document.getElementById('display-number');
const btns = document.querySelectorAll('.btn');

btns.forEach( function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        
        //Checking for click on button
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        displayValue.textContent = count;


        //Changing color of output
        if(count<0) {
            displayValue.style.color = "red";
        } else if(count>0) {
            displayValue.style.color = "green";
        } else {
            displayValue.style.color = "blue";
        }

    });
});