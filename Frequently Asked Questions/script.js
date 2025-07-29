let title = document.querySelector("#title");

let str = "Frequently Asked Questions "


let sec = 0;
let interVal = setInterval(()=>{
    title.textContent+=str[sec];
    sec++;
},30)


setTimeout(() => {
    clearInterval(interVal)
}, 780);



window.addEventListener('load', ()=> {
  title.style.display = "flex"
  title.style.justifyContent = "center"
});


const questionContainers = document.querySelectorAll(".question_container");

questionContainers.forEach((container) => {
  const question = container.querySelector(".question");

  question.addEventListener("click", () => {
    questionContainers.forEach((item) => {
      if (item !== container) {
        item.classList.remove("active");
      }
    });

    
    container.classList.toggle("active");
  });
});