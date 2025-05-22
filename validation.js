let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let checkForm = document.getElementById("checkForm");

let nameerror = document.getElementById('nameerror');
let emailerror = document.getElementById('emailerror');
let password1error = document.getElementById('password1error');
let password2error = document.getElementById('password2error');
let checkerror = document.getElementById ('checkerror');



form.addEventListener('submit', (e) => {
    e.preventDefault();

   validation();
});




 const validation = () => {

 let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    

    if(name.value.trim() == ''){
        nameerror.innerHTML = "Please enter your full name";
        nameerror.style.color= 'red';
        
    }else{
         nameerror.innerHTML = "";
    }

    if(!email.value.match(emailCheck )){
        emailerror.innerHTML = "Please provide a valid email.";
        emailerror.style.color = "red";
        
    }else{
         emailerror.innerHTML = "";
    }
    

    if(password1.value === ''){
        password1error.innerHTML = 'Password is required';
        password1error.style.color = 'red'
    }else if (password1.value.length < 8 || password1.value.length > 20){
         password1error.innerHTML = 'Password must be least 8 charecters';
        password1error.style.color = 'red'
    }else{
         password1error.innerHTML = '';
    }

    if(password2.value === ''){
        password2error.innerHTML = 'Please confirm your password'
        password2error.style.color = 'red'
    }else if (password1.value !== password2.value){
        password2error.innerHTML = "Password do not match";
        password2error.style.color = "red";
    }else{
        password2error.innerHTML = ''
    }
    

    if(!checkForm.value == ''){
        checkerror.innerHTML = 'You must agree before submitting';
        checkerror.style.color= 'red';
    }else {
        checkerror.innerHTML = '';
    }

        
    };