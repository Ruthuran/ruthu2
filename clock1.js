let clockInterval; // To store the reference to the interval

// Function to update the clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}


function startClock() {
   
    if (!clockInterval) {
        clockInterval = setInterval(updateClock, 1000); 
    }
}


function stopClock() {
    clearInterval(clockInterval); 
    clockInterval = null;
}
