"use strict";

let customer_obj = [ 
                   {
                    image : "./images/person1.jpeg",
                    name  : "James Smith",
                    designation : "Web developer",
                    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, deserunt? Nesciunt, quos saepe. Quas unde similique non neque magni. Minus, laudantium quis? Voluptatum sed labore cum ad modi vero quia magni asperiores doloremque velit? Dolor mollitia culpa quis natus sit."
                   },
                   {
                    image : "./images/person2.jpeg",
                    name  : "Franklin",
                    designation : "Designer",
                    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sapiente odit ipsam ad quaerat quo incidunt veritatis, autem molestias excepturi iusto. Recusandae vel atque tempore unde ad doloribus eaque iste officia quam iusto! Cumque, magni dolorum repellendus quasi velit voluptas!"
                   },
                   {
                    image : "./images/person3.jpeg",
                    name  : "Nancy Celia",
                    designation : "Content Writer",
                    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, fugiat nesciunt. At perferendis debitis, velit beatae repellat consectetur facilis, maxime veritatis totam harum, libero tempora enim neque distinctio ex architecto quaerat expedita rem tenetur voluptates aliquid ad aliquam. Ab, voluptatem!"
                   },
                   {
                    image : "./images/person4.jpeg",
                    name  : "Williamson",
                    designation : "FrontEnd Developer",
                    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error repudiandae non nulla tempore. A sapiente distinctio error expedita at vero, voluptates corrupti itaque odit temporibus assumenda in obcaecati suscipit perferendis debitis voluptatum quae eius nostrum similique soluta natus esse!"
                   }
                   ];


let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

let imageDiv = document.querySelector(".customer_img");
let name = document.querySelector("#title").querySelector("#name");
let designation = document.querySelector("#title").querySelector("#designation");
let content = document.querySelector("#description");

let count = 0;

prevBtn.addEventListener("click",()=>{
      changeDisplay("prev");
})
nextBtn.addEventListener("click",()=>{
    changeDisplay("next");
})


function changeDisplay(btn)
{
      if(btn == "prev")
      {
         count--;
         if(count == -1)
         {
            count = 3;
         }

         imageDiv.style.background = "url("+customer_obj[count].image+")";
         imageDiv.style.backgroundSize = "cover";
         // imageDiv.style.backgroundPosition = "top";
         name.innerText = customer_obj[count].name;
         designation.innerText = customer_obj[count].designation;
         content.innerText = customer_obj[count].description;
        
      }
      else {

        count++;
         if(count == 4)
         {
            count = 0;
         }

         imageDiv.style.background = "url("+customer_obj[count].image+")";
         imageDiv.style.backgroundSize = "cover";
         name.innerText = customer_obj[count].name;
         designation.innerText = customer_obj[count].designation;
         content.innerText = customer_obj[count].description;
        
      }
}












    
    