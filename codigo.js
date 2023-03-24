//Selecciona el boton para abrir el modal
const boton_open_modal=document.querySelector("#open_modal");
//Selecciona el contenido del modal
const modal_contenido=document.getElementById("modal_contenido")
//Seleccion el boton para cerrar el modal
const boton_cerrar_modal=document.querySelector("#cerrar");

//Agrega un evento clic para cerrar el modal
boton_cerrar_modal.addEventListener("click",()=>
{
    modal_contenido.classList.add("modal_oculto");
})

//Agrega un evento clic para abrir el modal
boton_open_modal.addEventListener('click',()=>
{
    modal_contenido.classList.remove("modal_oculto");
})