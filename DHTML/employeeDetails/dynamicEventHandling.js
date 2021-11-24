var validateData1 = (event, clas1) => {
    if(event.charCode >= 48 && event.charCode <= 57) {
        document.querySelector(clas1).style.display = 'none';
        return true;
    }
    document.querySelector(clas1).style.display = 'block';
    return false;
}
var validateData2 = (event) => {
    console.log(document.querySelector("#age").value);
    if(document.querySelector("#age").value <= 18) {
        document.querySelector(".minAge").style.display = 'block';
        return false;
    }
    else {
        document.querySelector(".minAge").style.display = 'none';
        return true;
    }
}
