"use strict";

var timerCount = 27;
var count = 11;
let timer = document.getElementById("timer");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

timer.innerHTML = "";
function changeColor()
{
    
    console.log(timerCount);

    // if(timerCount >=16 && timerCount <=25)
    // {
    //     timer.innerHTML = color;
    //     if(timerCount == 16)
    //     {
    //         red.classList.remove("redColor");
    //         // yellow.classList.add("yellowColor");
    //         color = 5;
    //     }
    //     else{
    //         red.classList.add("redColor");
    //         // timer.innerHTML = color;
    //         color--;
    //     }
    // }
    // if(timerCount >=10 && timerCount <=15)
    // {
    //     console.log(yellow);
    //     // yellow.classList.add("yellowColor");
    //     // color--;
    //     // timer.innerHTML = color;
    //     timer.innerHTML = color; 
    //     if(timerCount == 10)
    //     {
    //         yellow.classList.remove("yellowColor");
    //         green.classList.add("greenColor");
    //         color =11;
    //     }
    //     else{
    //         yellow.classList.add("yellowColor");
    //         color--;
    //         // timer.innerHTML = color;   
    //     }
    // }
    // if(timerCount >=0 && timerCount <=10)
    // {
    //     color--;
    //     timer.innerHTML = color;
    // }

    // if(timerCount == 0)
    // {
    //     green.classList.remove("greenColor");
    //     // red.classList.add("redColor");
    //     timerCount = 25;
    //     color = 10;
    // }
    // timerCount--;


   if(timerCount >= 17 && timerCount <=27)
   {
     count--;
     timer.innerHTML =  count;
     green.classList.remove("greenColor")
     red.classList.add("redColor");
     if(timerCount == 17)
     {
        count = 6;
        // red.classList.("redColor");
     }
   }
   else if(timerCount >= 11 && timerCount <=16)
   {
     count--;
     timer.innerHTML =  count;
     red.classList.remove("redColor");
     yellow.classList.add("yellowColor")
     if(timerCount == 11)
     {
        count = 11;
     }
   }
   else if(timerCount>=0 && timerCount <=10)
   {
    count--;
    timer.innerHTML =  count;
    yellow.classList.remove("yellowColor");
    green.classList.add("greenColor")

    if(timerCount == 0)
    {
       count = 11;
       timerCount = 28;
       
    }
   }

   timerCount--;


}



setInterval(changeColor,1000);