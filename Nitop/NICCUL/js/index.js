const answers = document.querySelectorAll(".faq-answer");
const  faqBtns = document.querySelectorAll(".faq-question i");
const services = document.querySelectorAll(".service");

faqBtns.forEach(btn=>{
     btn.addEventListener("click",(e)=>{
          const parent = e.target.parentElement.nextElementSibling;
          if(btn.className == "fa fa-plus-square"){
               hideAnswer();
               parent.classList.add("show");
               btn.className = "fa fa-minus-square";
          }else{
               parent.classList.remove("show");
               btn.className = "fa fa-plus-square";
          }
          
     })
})

services.forEach(service => {
     service.addEventListener("click",()=>{
          window.location.assign("services.html")
     })
})




function hideAnswer(){
     answers.forEach(answer=>{
          if(answer.classList.contains("show")){
               answer.classList.remove("show");
               const btn = answer.previousElementSibling.querySelector("i");
                if(btn.className == "fa fa-minus-square"){
                    btn.className = "fa fa-plus-square";
                }
          }
     })
}


