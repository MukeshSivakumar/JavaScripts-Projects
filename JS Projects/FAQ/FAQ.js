"use strict";

let down_btnList = document.querySelectorAll(".down-icon");
let answerList = document.querySelectorAll(".answer");
let up_btnList = document.querySelectorAll(".up-icon");

down_btnList.forEach(function(btn,index){

    down_btnList[index].addEventListener("click",function(){
        console.log(btn,index);

        btn.classList.add("d-none");
        up_btnList[index].classList.toggle("d-none");
        answerList[index].classList.toggle("d-none");

        answerList.forEach(function(item,indexAll){
                
             if(index != indexAll)
             {
                item.classList.add("d-none");
                up_btnList[indexAll].classList.add("d-none");
                down_btnList[indexAll].classList.remove("d-none");
             }
        });
    });

    //  handle up button click 
    up_btnList[index].addEventListener("click",function(){
            console.log(up_btnList[index],index);
            answerList[index].classList.toggle("d-none");
            up_btnList[index].classList.toggle("d-none");
            down_btnList[index].classList.toggle("d-none");
        });
});



