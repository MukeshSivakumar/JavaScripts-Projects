let btnList = document.querySelectorAll("button");

for(let i=0; i < btnList.length ; i++)
{
    btnList[i].flag = false;
    btnList[i].addEventListener("click",function(){
        if(btnList[i].flag == false)
        {
            btnList[i].classList.add("clicked")
            btnList[i].innerHTML = "clicked";
            btnList[i].flag = true;
        }
        else{
            btnList[i].classList.remove("clicked")
            btnList[i].innerHTML = "click me";
            btnList[i].flag = false;
        }
    })
}