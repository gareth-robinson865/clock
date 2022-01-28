//creating the time function
function time() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    //changing AM to PM when the time dictates
    if(hours >= 12) {
        meridian = "PM";
    }
    //adding a zero to the beginning of the minutes when it is less than 10
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    //adding zero to the beginning of the seconds when it is less than 10
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    
    //putting together the complete time
    let completeTime = `${hours}:${minutes}:${seconds}:${meridian}`;
    
    //inserting the time into the clock section
    document.getElementById('clock').innerHTML = completeTime;

    
}