//show running time
let message = document.getElementById('message-Box');
//console.log(message)
function showTime() {
    let timeZone = new Date()
    let hrs = timeZone.getHours()
    let mins = timeZone.getMinutes();
    let secs = timeZone.getSeconds();
    let AMPM = "AM";
    //console.log("hour:",hrs);
    if (hrs >= 6 && hrs < 12) {
        message.innerText = "GRAB SOME HEALTHY BREAKFAST!!"
    } else if (hrs >= 12 && hrs <= 15) {
        message.innerText = "LET'S HAVE SOME LUNCH !!"
    } else if (hrs > 15 && hrs <= 19) {
        message.innerText = "STOP YAVNING,GET SOME TEA...IT JUST EVENING!"
    } else if (hrs > 19 <= 24) {
        message.innerText = "CLOSE YOUR EYE AND SLEEP"
    }
    //changin hour in 12 hour format   
    if (hrs > 12) {
        hrs -= 12;
        AMPM = "PM"
    }
    //console.log(hrs,mins,secs,AMPM);
    let h = document.getElementById('h');
    h.innerHTML = hrs;
    let m = document.getElementById('m');
    m.innerHTML = mins;
    let s = document.getElementById('s');
    s.innerHTML = secs;
    let ampm = document.getElementsByClassName('ampm');
    ampm[0].innerHTML = AMPM;
}
setInterval(() => {
    showTime();
}, 1000)

//setAlarmfunction()------>(Button)
let m = document.getElementById('getmorning');
let a = document.getElementById('getafternoon');
let e = document.getElementById('getevening');
let n = document.getElementById('getnight');
let wishBox = document.getElementById('wishBox');
let images = document.getElementById('img');
// console.log(wishBox.innerHTML);
function setAlarm() {
    let timeZone = new Date();
    let hrs = timeZone.getHours();
    console.log(hrs);
    let mor = parseInt(m.value);
    let aft = parseInt(a.value);
    let eve = parseInt(e.value);
    let nig = parseInt(n.value);
    console.log(mor, aft, eve, nig);
    if (hrs === mor) {
        wishBox.innerHTML = "Good Morning!! WakeUp!!"
        images.src = "./gdmr.svg";
    } else if (hrs === aft) {
        wishBox.innerHTML = "Good aftrnoon!!"
        images.src = "./gdanoonlunch.svg"
    } else if (hrs === eve) {
        wishBox.innerHTML = "Good evening!!"
        images.src = "./gdev.png"
    } else if (hrs === nig) {
        wishBox.innerHTML = "Good night!!"
        images.src = "./gdnt.svg"
    }

    //update time table

    let tperiod = document.getElementsByClassName('tperiod');
    tperiod[0].innerHTML = `Morning time :${m.value - 12}AM`
    tperiod[1].innerHTML = `Lunch Time   :${a.value - 12}PM`
    tperiod[2].innerHTML = `Evening time:${e.value - 12}PM`
    tperiod[3].innerHTML = `Night time  :${n.value - 12}PM`
}