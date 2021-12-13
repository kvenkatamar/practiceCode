var validateData1 = (event, clas1) => {
    console.log(document.querySelector("#gender").value);
    /*if(document.querySelector("#gender").value !== "male" || document.querySelector("#gender").value !== "female") {
        document.querySelector(".genderError").style.display = 'block';
        return false;
    }
    else */if(event.charCode >= 48 && event.charCode <= 57) {
        document.querySelector(clas1).style.display = 'none';
        return true;
    }
    else {
        document.querySelector(clas1).style.display = 'block';
        return false;
    }
}
var validateData2 = (event) => {
    if(document.querySelector("#age").value <= 18) {
        document.querySelector(".minAge").style.display = 'block';
        return false;
    }
    else {
        document.querySelector(".minAge").style.display = 'none';
        return true;
    }
}
