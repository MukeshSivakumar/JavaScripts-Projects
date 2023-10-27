"use strict";

// create header inside container

let container_DIV = document.getElementById("container");

container_DIV.innerHTML = ` <!---------- Header --------->
                            <h1 id="main-header" class="main-head">Modal Project</h1>

                            <button>OPEN MODAL</button>
                            `;

// button properties
let btn = document.querySelector("button");
btn.id = "btn-id";
btn.setAttribute("class","btn");


// set background image

let main_section = document.getElementById("main-section");
main_section.style.background = "url(hero.jpeg)";
main_section.style.backgroundSize = "cover";
main_section.style.backgroundRepeat = "no-repeat"
main_section.style.backgroundPosition = "center";


// click event triggers popup
btn.addEventListener("click",popupDisplay)

// popup container
let popup_Container = document.getElementById("popup-container");


function popupDisplay()
{
    // add inactive state to container
    container_DIV.classList.add("popup-inactive");
    
    
    // remove inactive state &
    // add active state
    popup_Container.classList.remove("popup-inactive")
    popup_Container.classList.add("popup-active")

    // add overlap layer
    main_section.classList.add("overlap");
}


// close icon click event

let close_icon = document.getElementById("close");

close_icon.addEventListener("click",popupClose);

function popupClose()
{
    // popup template
    popup_Container.classList.add("popup-inactive");
    popup_Container.classList.remove("popup-active");

    // default modal
    container_DIV.classList.remove("popup-inactive");

    // remove overlap layer
    main_section.classList.remove("overlap");
}