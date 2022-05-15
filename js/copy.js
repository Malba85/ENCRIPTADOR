function copyBtn(){
    let copy = document.getElementById("output-text").value
    navigator.clipboard.writeText(copy)
    cleanTextArea(output_text);
    alert("Texto copiado al portapapeles" )
  
  }