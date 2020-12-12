let replaceCharacter = function(input) {
    let newString = input.replace(/'/g, '-');
    newString = newString.replace(/>/g, '-');
    newString = newString.replace(/</g, '-');
    newString = newString.replace(/\//g, '-');
    return newString
}

module.exports = replaceCharacter