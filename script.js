
function checkFillForm() {
    let unfilled = false;
    for (let index = 0; index < document.querySelectorAll('input').length; index++) {
    const element = document.querySelectorAll('input')[index];
        if (element.value != "") {
            continue
        } else {
            unfilled = true;
        }
    }
    return unfilled;
}


const buttonCreateAccount = document.querySelector("#button-create")
buttonCreateAccount.addEventListener('click', () => {
    let inputPassword = document.querySelector("#password");
    let inputConfirmPassword = document.querySelector("#check-password");

    checkFillForm();

    if (inputPassword.value != inputConfirmPassword.value) {
        document.querySelector(".message").style.color = "Red";
        document.querySelector(".message").innerHTML = "*Passwords do NOT match!";
    } else {
        document.querySelector(".message").innerHTML = "";
        let unfilled = checkFillForm();
        if (unfilled == false) {
            document.querySelector(".message").innerHTML = "";
            alert('Creating Account...');
            
        } else {
            document.querySelector(".message").style.color = "Red";
            document.querySelector(".message").innerHTML = "*You haven't fill all the fields";
        } 
    }
})