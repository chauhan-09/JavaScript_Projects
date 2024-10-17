const clock = document.querySelector('.clock');
function showTime()
{
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let zone = "AM";
    if(hours == 0) hours = 12;
    else if(hours == 12) zone = "PM";
    if(hours > 12)
    {
        hours = hours % 12;
        zone = "PM";
    }

    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;


    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${zone}`;
    
}

showTime();
setInterval(showTime,1000);