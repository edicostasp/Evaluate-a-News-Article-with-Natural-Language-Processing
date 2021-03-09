const checkForURL = (formText) => {
    var regex = formText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(regex == null){
        alert("Please, You need to enter with a valid URL !!");
        return false;
    } else{
    return true;
    }
}
export { checkForURL }