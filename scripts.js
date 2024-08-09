let nombre = document.querySelector(".nombre");
let mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");
const bottonLoggin = document.getElementById("loggin")
const usuario = document.getElementById("usuario")
let contenedorFixed = document.querySelector(".fixed")
// Cargar los comentarios existentes desde localStorage
let arrae = JSON.parse(localStorage.getItem("msj")) || [];
let indice = arrae.length;  // Para mantener el índice correctamente
let comentario = document.querySelector(".comentarios")


function datos() {
    let dato = { name: usuario.value, msj: mensaje.value };
    arrae.push(dato);
    localStorage.setItem("msj", JSON.stringify(arrae));
}


function contenido (){
    arrae.forEach(element => {
        comentario.innerHTML += 
    `
        <div class="comentario">
            <p class="nombreComentario">@${element.name}</p>
            <p class="mensajeComentario">${element.msj}</p>
        </div>
     `
    });
    
}
contenido()
boton.addEventListener("click", () => {
    datos();
    comentario.innerHTML += 
    `
        <div class="comentario">
            <p class="nombreComentario">@${usuario.value}</p>
            <p class="mensajeComentario">${mensaje.value}</p>
        </div>
     `
});
bottonLoggin.addEventListener("click", ()=>{
    contenedorFixed.classList.toggle("none")
    nombre.textContent = `${usuario.value}`
    console.log(JSON.parse(localStorage.getItem("msj")))
})
