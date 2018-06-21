
var refresh = setInterval(takeTime, 1000);

function takeTime() {
    var objData = new Date();
    var hourTime = objData.getHours();
    var minuteTime = objData.getMinutes();
    var secondTime = objData.getSeconds();
    
    
    var secondDegrees = (secondTime / 60) * 360 + 90;
    var secondHand = document.querySelector('.second');
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;


    var minuteDegrees = (minuteTime / 60) * 360 + 90;
    var minuteHand = document.querySelector('.minute');
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    var hourDegrees = (hourTime / 12) * 360 + 90;
    var hourHand = document.querySelector('.hour');
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;  
}

takeTime();




























