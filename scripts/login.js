function checkLoginForm(){
    let ret = true;

    if (username.value.length === 0){
        console.log('Please enter a username');
        ret = false;
    }
    if (password.value.length === 0){
        console.log('Please enter a password');
        ret = false;
    }
    return (ret);
}

function submitLoginForm(){
    //Form validation
    if (checkLoginForm() === false)
        return;

    //Post form
    console.log('username =', username.value);
    console.log('password =', password.value);
}