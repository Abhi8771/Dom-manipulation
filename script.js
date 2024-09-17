
    document.getElementById('quote').textContent = "The only limit to our realization of tomorrow is our doubts of today.";

    const infoBoxes = document.getElementsByClassName('info-box');
    for (let i = 0; i < infoBoxes.length; i++) {
        infoBoxes[i].style.backgroundColor = '#f0e68c'; 
    }

    const taskListItems = document.getElementsByTagName('li');
    if (taskListItems.length >= 3) {
        taskListItems[2].textContent = 'Updated Task 3'; 
    }

    const footerSpan = document.querySelector('footer span');
    footerSpan.textContent += " - Have a great day!";

