function checkRegisterForm(){
    let ret = true;

    if (username.value.length === 0){
        console.log('Please enter a username');
        ret = false;
    }
    if (email.value.length === 0){
        console.log('Please enter a username');
        ret = false;
    }
    if (password.value.length === 0){
        console.log('Please enter a password');
        ret = false;
    }
    return (ret);
}

function submitRegisterForm(){
    //Form validation
    if (checkRegisterForm() === false)
        return;

    //Post form
    console.log('username =', username.value);
    console.log('email =', email.value);
    console.log('password =', password.value);
}