const input_text = document.querySelector("#input-text");
const output_text = document.querySelector("#output-text");

function encrypter(textToEncrypt){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];

    textToEncrypt = textToEncrypt.toLowerCase();
    for(let i=0 ; i<matrizCodigo.length; i++){
        if(textToEncrypt.includes(matrizCodigo[i][0])){
            textToEncrypt = textToEncrypt.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textToEncrypt;
}

function encryptBtn(){
    const encrypt_text = encrypter(input_text.value);
    output_text.value = encrypt_text;
    cleanTextArea(input_text);
  

}

function cleanTextArea(element){
    element.value = '';
}