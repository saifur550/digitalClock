


function digitalClock(){
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let timeFormat = 'AM';


    if(hours === 0){
        hours = 0;
    }
    if(hours > 12 ){
        hours = hours - 12
        timeFormat ="PM"
    }


    if(hours < 10){
        hours = '0' + hours
    }

    if(minutes < 10){
        minutes = '0' + hours
    }

    if(seconds < 10){
        seconds = '0' + hours
    }
   
    
    const finalTime= `${hours}:${minutes}:${seconds}`;
    document.getElementById('timeZone').innerText = finalTime
    document.getElementById('timeFormat').innerText = timeFormat


}

setInterval (digitalClock, 1000)
