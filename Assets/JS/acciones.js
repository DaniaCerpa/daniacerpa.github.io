window.onload = function () {

const figures =document.querySelectorAll (".imgh");

figures.forEach (figure =>{
    const figcaption1 = figure.querySelector("figcaption");

    function mostrarfigcaption() {
        figcaption1.style.display = "block";
    }

    function ocultarfigcaption() {
        figcaption1.style.display = "none";
    }

    figure.addEventListener("mouseover", mostrarfigcaption)
    figure.addEventListener("mouseleave", ocultarfigcaption)
})




const botonexpandformulario = document.getElementById("botonform");
const formulario = document.getElementById("formulario");

formulario.style.display = "none"

function validarcampos() {
    const correo =document.getElementById("correo").value
    const confirmarcorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value
    const telefono = document.getElementById("specificSizeInputGroupUsername").value
    const confirmarTelefono = /^\d{8,}$/;
    
    if (nombre === "" || apellido === "" || telefono === "") {
        alert("Por favor, completa todos los campos del formulario");   

    } else if (!confirmarcorreo.test(correo)) {
        alert("Correo electrónico inválido");

    } else if (!confirmarTelefono.test(telefono)) {
        alert("El número de teléfono debe tener al menos 8 dígitos");
        
    } else {
        alert("Muchas gracias por tu interés. Me pondre en contacto contigo a la brevedad");
    }
}

    botonexpandformulario.addEventListener("click", function () {
        if (formulario.style.display === "none") {
            formulario.style.display = "block";
    
        } else { formulario.style.display = "none"; }
    })

    document.getElementById("botonvalidar").addEventListener("click", validarcampos)};
   
    
    
   
    