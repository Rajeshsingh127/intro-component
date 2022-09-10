const errors=["First Name Cannot be empty", 
"Last Name Cannot be empty", "Looks like this is not an email","Password Cannot be empty"];

let inputs=document.querySelectorAll(".form__input");
const submit = document.getElementById("submit");
console.log(submit);


submit.addEventListener('click',(e) =>{
    e.preventDefault();
    for(let i = 0; i < inputs.length; i++){

        const errormsg = inputs[i].nextElementSibling;
        if(inputs[i].value !== "" ){
            inputs[i].classList.remove("error");
            errormsg.style.display="none";
        }
        else{
            inputs[i].classList.add("error");
            errormsg.innerHTML=errors[i];
            errormsg.style.display="block"
        }

        if (i == 2 &&  !validateEmail(inputs[i].value)){
            inputs[i].classList.add("error");
            errormsg.innerHTML=errors[i];
            errormsg.style.display="block";
        }
    }
})


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

