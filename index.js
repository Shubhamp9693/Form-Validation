let formData=document.querySelector(".form");
let submitButton=document.querySelector(".button");
let errorMessages=document.querySelectorAll(".error-message");
let emptyField=document.querySelectorAll(".empty-field");
let showPasswordButton=document.querySelector(".btn");
let firstNameTarget,lastNameTarget,emailTarget,passwordTarget;
let firstName,lastName,email,password;
let key;
let fFlag,lFlag,eFlag,pFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let element of errorMessages){
     element.classList.add("d-none")
}
for(let element of emptyField){
    element.classList.add("d-none");
}

formData.addEventListener("keyup",(event) => {
    event.preventDefault();
    key=event.target.dataset.key;
    switch(key){
        case "firstName":
            firstName=event.target.value;
            firstNameTarget=event.target;
            break;
        case "lastName":
            lastName=event.target.value;
            lastNameTarget=event.target;
            break;
        case "email":
            email=event.target.value;
            emailTarget=event.target;
            break;
        case "password":
            password=event.target.value;
            passwordTarget=event.target;
            break;
        default:
            firstName=lastName=email=password="";
            break;
    }
});

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(firstName,lastName,email,password);
    if(firstName){
        emptyField[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            errorMessages[0].classList.remove("d-none");
           firstNameTarget.classList.add("error");
           fFlag=false;
        }
        else{
            errorMessages[0].classList.add("d-none");
            firstNameTarget.classList.remove("error");
            fFlag=true;
        }
    }
    else{
        emptyField[0].classList.remove("d-none");
        
    }
    if(lastName){
        emptyField[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            errorMessages[1].classList.remove("d-none");
            lastNameTarget.classList.add("error");
            lFlag=false;
        }
        else{
            errorMessages[1].classList.add("d-none");
            lastNameTarget.classList.remove("error");
            lFlag=true;
        }
    }
    else{
        emptyField[1].classList.remove("d-none");
       
    }
    if(email){
        if(!emailRegex.test(email)){
            emptyField[2].classList.add("d-none");
            errorMessages[2].classList.remove("d-none");
            emailTarget.classList.add("error");
            eFlag=false;
        }
        else{
            errorMessages[2].classList.add("d-none");
            emailTarget.classList.remove("error");
            eFlag=true;
        }
    }
    else{
        emptyField[2].classList.remove("d-none");
       
    }
    if(password){
        emptyField[3].classList.add("d-none");
        if(!pwdRegex.test(password)){
            errorMessages[3].classList.remove("d-none");
            passwordTarget.classList.add("error");
            pFlag=false;
        }
        else{
            errorMessages[3].classList.add("d-none");
            passwordTarget.classList.remove("error");
            pFlag=true;
        }
    }
    else{
        emptyField[3].classList.remove("d-none");
    }

    if(fFlag && lFlag && eFlag && pFlag){
        firstNameTarget.value=lastNameTarget.value=emailTarget.value=passwordTarget.value="";
        window.location.href="/success.html";
    }

})
showPasswordButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(passwordTarget.getAttribute("type")==="text"){
        passwordTarget.setAttribute("type","password")
    }
    else{
        passwordTarget.setAttribute("type","text");
    }
})
