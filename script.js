
let num1, num2, total;

const but = document.getElementById("btn");

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const dt1 = document.getElementById("dt1");
const dt2 = document.getElementById("dt2");

const totText = document.getElementById("total");
const result = document.getElementById("h3");

const curDay = document.getElementById("day");
let date = new Date();

//so program starts with current time
day = date.getDate();
month = date.getMonth();
year = date.getFullYear();
hour = date.getHours();
mins = date.getMinutes();
secs = date.getSeconds();
curDay.innerText = day + "/" + month + "/" + year + " at " +  hour + ":" + mins + ":" + secs;

//update the time
setInterval(time, 1000);


function time() {
    date = new Date();

    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    hour = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();

    if (hour < 10) {
        if (mins < 10) {
            if (secs < 10) {
                curDay.innerText = day + "/" + month + "/" + year + " at 0" +  hour + ":0" + mins + ":0" + secs;
            } else {
                curDay.innerText = day + "/" + month + "/" + year + " at 0" +  hour + ":0" + mins + ":" + secs;
            }
        
        } else if (secs < 10) {
            curDay.innerText = day + "/" + month + "/" + year + " at 0" +  hour + ":" + mins + ":0" + secs;
        } else {
            curDay.innerText = day + "/" + month + "/" + year + " at 0" +  hour + ":" + mins + ":" + secs;
        }
    } else {
       if (mins < 10) {
            if (secs < 10) {
                curDay.innerText = day + "/" + month + "/" + year + " at " +  hour + ":0" + mins + ":0" + secs;
            } else {
                curDay.innerText = day + "/" + month + "/" + year + " at " +  hour + ":0" + mins + ":" + secs;
            }
        
        } else if (secs < 10) {
            curDay.innerText = day + "/" + month + "/" + year + " at " +  hour + ":" + mins + ":0" + secs;
        } else {
            curDay.innerText = day + "/" + month + "/" + year + " at " +  hour + ":" + mins + ":" + secs;
        } 
    }

    

   
}


function btnPush() 
{

num1 = Math.floor(((Math.random() * (7 - 1)) + 1));
num2 = Math.floor(((Math.random() * (7 - 1)) + 1));
displayNum(num1, d1);
displayNum(num2, d2);
dt1.innerText = num1;
dt2.innerText = num2;

total = num1 + num2;
totText.innerText = total;

if (total < 8) {
    //lose
    result.innerText = "You Lost!\nWill you try again?"
} else {
    //win
    result.innerText = "You Win!\nWill you try again?"
}


}

function displayNum(numX, dX) {

if (numX == 1) {
    dX.src = "dice-1.svg";
} else if (numX == 2) {
    dX.src = "dice-2.svg";
} else if (numX == 3) {
    dX.src = "dice-3.svg";
} else if (numX == 4) {
    dX.src = "dice-4.svg";
} else if (numX == 5) {
    dX.src = "dice-5.svg";
} else if (numX == 6) {
    dX.src = "dice-6.svg";
}

}


