let mainForm = document.querySelector('.mainForm');
let result = document.querySelector('.result');
mainForm.addEventListener('click' , function(event){
    if(
        !event.target.classList.contains('btn')
    )return
   let value = event.target.innerText;
   console.log(value);
   switch(value){
        case 'C':
            result.innerText = '';
        break;
        case '=':
            result.innerText = eval(result.innerText)
        break;
        default:
            result.innerText += value;
   }
   
});