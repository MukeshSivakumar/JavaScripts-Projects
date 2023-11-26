
// function calculate(num)
// {
//    let input = document.getElementById("inputValue");
    
//    input.value = input.value + num;
// }

// function evaluation()
// {
//     let input = document.getElementById("inputValue");
    
//     if(input.value != "")
//     {
//     try{
//         input.value = eval(input.value);
//     }catch(obj)
//       {
//        alert("Please click valid inputs");
//       }
    
//     if(input.value == 0)
//       {
//         input.value = "";
//       }
//    }
// }

// function cancelFun()
// {
//     let input = document.getElementById("inputValue");
//     input.value = "";
// }

// function deleteFun()
// {
//     let input = document.getElementById("inputValue");
//     let inputString = input.value;
//     input.value = inputString.slice(0,-1);
// }

// function keyValidation(x)
// {
//    let input = document.getElementById("inputValue");
//    // To allow Enter and = keys
//    if(x == "Enter" || x == "=")
//    {
//     evaluation();
//     return false;
//    }
   
//    // pattern to evaluate needed keys alone
//   let pattern = /^[0-9\%\/\*\-\+\.\n]+$/;
//   let checkPattern = pattern.test(x);
//  // Backspace to delete operation
//   if(x == "Backspace")
//   {
//     input.value = input.value.slice(0,-1);
//   }
//   // To restrict alphabet keys
//   if(!checkPattern)
//   {
//     return false;
//   }
  
// }







let numButtons = document.querySelectorAll(".numButton");
let symbolButtons = document.querySelectorAll(".symbolbutton");
let inputBox = document.querySelector("#inputValue")

let cancelBtn = document.querySelector(".cancelBtn");
let deleteBtn = document.querySelector(".deleteBtn");

let symbols = ["/","*","+","-","%"]

let display_string = "";
let temp_string = "";
let arr = new Array();


//restrict input keypress values

inputBox.addEventListener("keypress",()=>{
    console.log("incoming")
    event.preventDefault();
})



// for numbers
numButtons.forEach((num) => {

    num.addEventListener("click",() => {
           display_string += num.value;
           temp_string += num.value;

           inputBox.value = display_string;
           console.log(arr);
    })
});

// for operators
symbolButtons.forEach((operator) => {
      
    operator.addEventListener("click",() => {


          display_string += operator.value;
          inputBox.value = display_string;
        if(arr.length == 1 && temp_string != "")
        {
            arr[0] = Number(arr[0].toString()+temp_string);
            arr.push(operator.value)  ;     
        }
        else{
           
            // value added after calculation done
            if(temp_string.length >0)
            {
              arr.push(temp_string,operator.value);
            }
            else{
              arr.push(operator.value);   
            }
        }
           
            
            temp_string = "";
            console.log(arr);
       
          
    });
})


let equal_Operator = document.querySelector("#equalTo");

equal_Operator.addEventListener("click",() => {

    console.log("temp str : "+temp_string)
    if(arr.length > 0)
    {
        // last num stored in temp 
        if(temp_string.length > 0)
        {
            arr.push(temp_string);
            temp_string = "";
        }
       


        // to evaluate division, multiplication and modulo
        for(let i=0 ; i < arr.length ; i++)
        {
           let temp_result;
           if(arr[i] == "/" || arr[i] == "*" || arr[i] == "%")
           {
                if(arr[i] == "/")
                {
                    temp_result = Number(arr[i-1]) / Number(arr[i+1]);
                }
                else if(arr[i] == "*"){
                    temp_result = Number(arr[i-1]) * Number(arr[i+1]);
                     
                }else{
                    temp_result = Number(arr[i-1]) % Number(arr[i+1]);
                }

                arr.splice(i-1,3,temp_result);
                i--;
                temp_result = "";
            
           }
        }

        // to evaluate addition and subtraction
        for(let i=0 ; i < arr.length ; i++)
        {
        //    console.log(arr);
           let temp_result;
           if(arr[i] == "+" || arr[i] == "-")
           {
                if(arr[i] == "+")
                {
                    temp_result = Number(arr[i-1]) + Number(arr[i+1]);
                    arr.splice(i-1,3,temp_result);
                    i--;
                    temp_result = "";
                }
                else{
                    temp_result = Number(arr[i-1]) - Number(arr[i+1]);
                    arr.splice(i-1,3,temp_result);
                    i--;
                    temp_result = "";   
                }
               
           }
        }

        // convert long decimal into 2 decimal points
        console.log(arr,arr[0].toString().includes("."));
        if(arr[0].toString().includes("."))
        {
            let dotIndex = arr[0].toString().indexOf(".");
            arr[0] = Number(arr[0].toString().slice(0,dotIndex)+"."+arr[0].toString().slice(dotIndex+1,dotIndex+3));
        }
        inputBox.value = arr[0];
        display_string = arr[0];
        console.log(arr);

    }
})


// cancel function

cancelBtn.addEventListener("click",()=>{
    inputBox.value = "";
    display_string = "";
    temp_string = "";
    arr = [];
});


// delete function

deleteBtn.addEventListener("click",()=>{
   
    if(temp_string.length > 0)
    {
        temp_string = temp_string.slice(0,-1);
    }
     
    // to delete symbol and 1 number in array
    if(symbols.includes(display_string.slice(-1)) || arr[arr.length-1].toString().length == 1)
    {
        arr.splice(arr.length-1,1);
    }
    else {
        arr[arr.length-1] = arr[arr.length-1].toString().slice(0,-1);
    }

    display_string = display_string.slice(0,-1);
    inputBox.value = display_string;
   
});












