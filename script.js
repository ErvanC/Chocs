function validateData(){
    var nama = document.getElementById("username_input").value;
    var password = document.getElementById("password_input").value;
    var email = document.getElementById("email_input").value;
    var age = document.getElementById("age_input").value;
    var pnum = document.getElementById("pnum_input").value
    var Male = document.getElementById("genderMale");
    var Female = document.getElementById("genderFemale");

    if(nama.length < 5 || nama > 15){
        alert("nama harus terdiri dari 5-15 karakter");
    }
    else if(!isAlNum(password)){
        alert("password must be alphanumeric");
    }
    else if(!email.endsWith("@gmail.com")){
        alert("email must be an email format");
    }
    else if(age < 5 || age > 80){
        alert("age must be between 5 and 80");
    }
    else if(!pnum.startsWith("08")){
        alert("Phone number must start with 08");
    }
    else if(Male.checked == false && Female.checked == false){
        alert("choose your gender");
    }
    else if(checkbox_input.checked == false){
        alert("agree to terms and conditions");
    }
}

function isAlNum(password){
    var isAl = false;
    var isNum = false;

    for(var i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isNum = true;
        }
        else{
            isAl = true;
        }

        if(isAl == true && isNum == true){
            return true;
        }
    }
    return false;
}

document.getElementById("Submit").addEventListener("click", ()=>{
    validateData();
})