"use strict"

let btn = document.createElement("button");

btn.innerText = "Change BackGround Color";

btn.setAttribute("id","btn_id");

btn.classList.add("btn")

let content = document.createElement("p");

content.setAttribute("id","hexcolor_code");

let textNode = document.createTextNode("Hex Color Code")

content.appendChild(textNode);

let maindiv = document.createElement("div");

maindiv.classList.add("main_div")

maindiv.append(btn,content);

document.body.appendChild(maindiv);


let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']



let count = 0;

btn.addEventListener("click",() => changeColor(colorArray));

// btn.addEventListener("click",() => {
//     console.log(colorArray[count]);
// });

let body = document.body;
function changeColor(colorArr)
{
    console.log(colorArr.length);
    if(count == 49)
    {
        count = 1;
        body.style.backgroundColor = colorArr[count];

    }
    else
    {
        body.style.backgroundColor = colorArr[count]; 
        count++;
    }
    content.innerText = colorArr[count];
    
}
