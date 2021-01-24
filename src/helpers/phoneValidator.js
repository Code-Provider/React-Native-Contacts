export function phoneValidator(phones) {
    phones.forEach(element => {
        if (element.phoneval === "" || element.phoneval.length != 10 ) {
            return "Phone can't be empty or not consist of 10 digits"
        }
    });
    return ''
}

export function phoneErrorIndex(phones){
    let arr = Array(phones.length).fill("");
    phones.forEach((element,index) => {
        if (element.phoneval === "" ) {
            arr[index] = "Phone value can't be empty."
        }
        else if (element.phoneval.length != 10){
            arr[index] = "Phone values must consist of 10 digits"
        }
    });

    return arr 

}