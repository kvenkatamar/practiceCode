var validateUserID = (event) => {
    //removing mailID validation
    document.querySelector(".error-2").style.display = 'none';
    document.querySelector(".error-2_1").style.display = 'none';
    //user ID cannot be empty
    if(document.querySelector(".userId").value == ''){
        document.querySelector(".error-1").style.display = 'block';
        return false;
    }
    else{
        document.querySelector(".error-1").style.display = 'none';
        return true;
    }
}
var validateMailID = (event) => {
    //removing pwd Validation
    document.querySelector(".error-3").style.display = 'none';
    document.querySelector(".error-3_1").style.display = 'none';
    document.querySelector(".error-3_2").style.display = 'none';
    document.querySelector(".error-3_3").style.display = 'none';
    document.querySelector(".error-3_4").style.display = 'none';
    //Mail ID cannot be empty
    if(document.querySelector(".mailId").value == ''){
        document.querySelector(".error-2").style.display = 'block';
        if(document.querySelector(".userId").value == ''){
            document.querySelector(".error-1").style.display = 'block';
        }
        return false;
    }
    else{
        //it should be valid mail ID
        if(document.querySelector(".mailId").value.includes("@gmail.com")){
            document.querySelector(".error-2_1").style.display = 'none';
            document.querySelector(".error-2").style.display = 'none';
        }
        else{
            document.querySelector(".error-2_1").style.display = 'block';
            return false;
        }
        return true;
    }
}
var validatePassword = (event) => {
    var pwd = document.querySelector(".pwd").value;
    //pwd can't be empty
    if(pwd == ''){
        document.querySelector(".error-3").style.display = 'block';
        return false;
    }
    //length 8 char
    else if(pwd.length <= 8){
        document.querySelector(".error-3_1").style.display = 'block';
        return false;
    }
    //pwd not Start with number
    else if(pwd.charCodeAt(0) <= 57 && pwd.charCodeAt(0) >= 48){
        document.querySelector(".error-3_2").style.display = 'block';
        return false;
    }
    //have one upperCase char
    var upperCaseCount = 0;
    for(var i = 0; i < pwd.length; i++){
        if(pwd.charCodeAt(i) >= 65 && pwd.charCodeAt(i) <= 90){
            upperCaseCount++;
        }
    }
    if(upperCaseCount < 1){
        document.querySelector(".error-3_3").style.display = 'block';
        return false;
    }
    //min 2 spl characters
    var splChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    var splCharCount = 0;
    for(var i = 0; i < splChar.length; i++){
        if(pwd.includes(splChar[i])){
            splCharCount++;
        }
    }
    if(splCharCount < 2){
        document.querySelector(".error-3_4").style.display = 'block';
        return false;
    }
    else{
        validateRePwd(event);
    }
}
var validateRePwd = (event) => {
    if(document.querySelector(".pwd").value == document.querySelector(".rePwd").value){
        document.querySelector(".error-4").style.display = 'none';
        return false;
    }
    else{
        document.querySelector(".error-4").style.display = 'block';
        return true;
    }
}
var clearValidateUserID = (event) => {
    //clearing userId validation
    document.querySelector(".error-1").style.display = 'none';
}