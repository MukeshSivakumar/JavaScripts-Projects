
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


let display_string = "";
let temp_string = "";
let arr = new Array();

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
          arr.push(temp_string,operator.value);
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
        arr.push(temp_string);
        temp_string = "";


        // to evaluate division, multiplication and modulo
        for(let i=0 ; i < arr.length ; i++)
        {
       
           let temp_result;
           if(arr[i] == "/" || arr[i] == "*")
           {
                if(arr[i] == "/")
                {
                    temp_result = Number(arr[i-1]) / Number(arr[i+1]);
                    arr.splice(i-1,3,temp_result);
                    i--;
                    temp_result = "";
                }
                else{
                    temp_result = Number(arr[i-1]) * Number(arr[i+1]);
                    arr.splice(i-1,3,temp_result);
                    i--;
                    temp_result = "";   
                }
              
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
    display_string = display_string.slice(0,-1);
    temp_string = temp_string.slice(0,-1);
    inputBox.value = display_string;
});












