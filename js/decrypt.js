

function decrypter(textToDecrypt){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];

    textToDecrypt = textToDecrypt.toLowerCase();
    for(let i=0 ; i<matrizCodigo.length; i++){
        if(textToDecrypt.includes(matrizCodigo[i][1])){
            textToDecrypt = textToDecrypt.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textToDecrypt;
}

function decryptBtn(){
    const decrypt_text = decrypter(input_text.value);
    output_text.value = decrypt_text;
    cleanTextArea(input_text);
}
