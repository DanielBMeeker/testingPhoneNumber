let validatePhoneNumber = function(inputValue){
    let inputString = inputValue + ""
    if (inputValue === undefined || inputValue == null || inputString.trim() == "") {
        return false;
    }
    else if (inputValue.toString().length != 10) {
        return false;
    }
    else if (Number.isInteger(inputValue)) {
        return true;
    }
    else if (typeof inputValue === 'string') {
        return false;
    }

}

module.exports=validatePhoneNumber;