$(function(){
    var deviceDetected = false;

    //countdown time
    var initial = 120, //change count downtime here, 1000 equals to 10s
        count = initial,
        counter; //10 will run it every 100th of a second

    function timer() {
        if (count <= 2) {
            /*add the code after 2 minutes time off here*/
            window.location.href = "found_wemo_03.html";
            if (count > 0){
                count--;
                displayCount(count);
            } else {
                clearInterval(counter);
            }
        } else {
            count--;
            displayCount(count);
        }
    }

    function displayCount(count) {
        var mins = Math.floor(count / 60),
            secs = count % 60;

        secs = (secs < 10) ? "0" + secs : secs;
        document.getElementById("countdownTime").innerHTML = mins + ":" + secs;
    }

    counter = setInterval(timer, 1000);

    setInterval(function () {
        if (deviceDetected) {
            /*add the code after detected app been turned on/off here*/
            window.location.href = "found_wemo_03.html";
        }
    }, 1000);
});