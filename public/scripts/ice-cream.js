let form = document.getElementById("form").onsubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    resetAllErrors();

    if (document.getElementById("name").value === "") {
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    }

    if (document.getElementById("email").value === "" || !document.getElementById("email").value.includes("@")) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    if (document.getElementById("flavor").value === "none") {
        document.getElementById("flavor-error").style.display = "block";
        isValid = false;
    }

    let coneTypes = document.getElementsByName("cone");
    console.log(coneTypes.values);

    let checkedBoxes = 0;

    for (let i = 0; i < coneTypes.length; i++) {
        if (!coneTypes[i].checked) {
            checkedBoxes++;
        }
    }

     if (checkedBoxes === coneTypes.length) { 
            document.getElementById("cone-error").style.display = "block";
            isValid = false;
    }


    return isValid;



}

function resetAllErrors() {
    let allErros = document.getElementsByClassName("err");
    for (let i = 0; i < allErros.length; i++) {
        allErros[i].style.display = "none";
    }
}

