function success() {
    let failed = false;

    if (document.getElementById("username").value === "")
        failed = true;
    if (document.getElementById("email").value === "")
        failed = true;
    else {
        //Check if password contain at least 1 uppercase, 1 number and 8 charaters
        if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value) != true){
            document.getElementById("email-inputbox").style.border = "1px solid red";
            failed = true;
        }
        else
            document.getElementById("email-inputbox").style.border = "1px solid #DBDBFF";
    }
    if (document.getElementById("password").value === "")
        failed = true;
    else {
        //Check if password contain at least 1 uppercase, 1 number and 8 charaters
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password.value) != true || password.value.length < 8){
            document.getElementById("password-inputbox").style.border = "1px solid red";
            failed = true;
        }
        else
            document.getElementById("password-inputbox").style.border = "1px solid #DBDBFF";
    }

    if (failed)
        document.getElementById("register-button").disabled = true;
    else
        document.getElementById("register-button").disabled = false;
}

function submitRegisterForm(){
    //Validation
    if (username.value === "" || email.value === "" || password.value === ""){
        success();
        return;
    }

    //Submit
     fetch('http://localhost:6300/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username.value, email: email.value, password: password.value})
    }).then(result => {
        console.log("Completed with result:", result);
    }).catch(err => {
        console.error(err);
    });
}