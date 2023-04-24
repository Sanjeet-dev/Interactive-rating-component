var box = document.getElementsByClassName('container');
const form1 = document.querySelector('.note1');
const form2 = document.querySelector('.note2');
const btn = document.querySelector('.submit');
const number = document.querySelectorAll('.number');
const span = document.querySelector('.value');

var selectedNum=0;
number.forEach((e)=>{
    e.addEventListener('click',()=>{
        removeClass();
        e.classList.add("active");
        selectedNum=e.textContent;
    })
})

function removeClass(){
    number.forEach((e)=>{
        if(e.classList.contains("active")){
            e.classList.remove("active");
        }
    })
}
btn.addEventListener("click", event =>{
    event.preventDefault(); 
    form1.style.display='none';
    form2.style.display='block';
    span.textContent = selectedNum;
    
   
})