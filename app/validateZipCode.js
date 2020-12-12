let validateZipCode = function(inZip) {
    if ((inZip + "") === "00000" || (inZip + "") === "00000-0000") {
        return false;
    }

        let zipPattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
        return zipPattern.test(inZip + "");

}

module.exports = validateZipCode;

