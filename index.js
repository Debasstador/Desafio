function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./disenos/bird.png";

    } else {
        muneco.src = "./disenos/quetzalcoatl.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontado";
        parrafo.textContent = "Ingresa texto a desencriptar"
        alert("Debes ingresar un texto")

    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            muneco.src = "./disenos/chalchiuhtlicue.png";            
        } else {
            muneco.src = "./disenos/quetzalcoatl.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontado";
            parrafo.textContent = "Ingresa texto a desencriptar"
            alert("Debes ingresar un texto")

        }
}