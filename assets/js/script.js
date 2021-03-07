// Set All the DOM Variables
const currentDayEl = document.getElementById("currentDay");


// Function for displaying the time on the Jumbotron
const displayTheDate = function() {
	const today = moment();
	currentDayEl.textContent = today;
};

const refreshDate = setInterval(displayTheDate, 1000);