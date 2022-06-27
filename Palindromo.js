
// soluçao 1
function VerificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

// soluçao 2
function VerificaPalindromo(string){
    if(!string) return "string inexistente";

    for(let i =0; i < string.length; i++){
        if(string[i] !== string.length - 1 - i){
            return false;
        }

    }
}
