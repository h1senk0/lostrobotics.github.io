var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        (days < 10 ? '0' : '') + days + "<span>" + (days == 1 ? " day" : " days") + "</span><br>" +
        (hours < 10 ? '0' : '') + hours + "<span>" + (hours == 1 ? " hour" : " hours") + "</span><br>" +
        (minutes < 10 ? '0' : '') + minutes + "<span>" + (minutes == 1 ? " minute" : " minutes") + "</span><br>" +
        (seconds < 10 ? '0' : '') + seconds + "<span>" + (seconds == 1 ? " second" : " seconds") + "</span>";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Released";
    }
}, 1000);
