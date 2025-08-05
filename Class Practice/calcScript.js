let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");


let btns = document.querySelectorAll(".btn");
let operation = document.querySelectorAll(".operation");
console.log(operation);


let displayBox = document.querySelector("#displayBox");

// one.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${one.textContent}`;
// });

// two.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${two.textContent}`;
// });

// three.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${three.textContent}`;
// });

// four.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${four.textContent}`;
// });

// five.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${five.textContent}`;
// });

// six.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${six.textContent}`;
// });

// seven.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${seven.textContent}`;
// });

// eight.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${eight.textContent}`;
// });

// nine.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${nine.textContent}`;
// });

// zero.addEventListener("click", ()=>{    
//     displayBox.value = displayBox.value + `${zero.textContent}`;
// });


btns.forEach(button=>{
     button.addEventListener("click", ()=>{
        displayBox.value += button.textContent;
     });
})
console.log(displayBox.value);

let res =  0;
let plus = ""
operation.forEach((oper)=>{
    
    oper.addEventListener("click", ()=>{
        if (oper.textContent == "+") {
            
        }
      if (oper.textContent == '=') {
         displayBox.value = res+displayBox.value
      }
    });
    
});




