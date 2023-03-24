//Selecciona el boton para abrir el modal
const boton_open_modal=document.querySelector("#open_modal");
//Selecciona el contenido del modal
const modal_contenido=document.getElementById("modal_contenido")
//Seleccion el boton para cerrar el modal
const boton_cerrar_modal=document.querySelector("#cerrar");


//Si estan todos los componentes del modal
if (boton_cerrar_modal && modal_contenido && boton_cerrar_modal)
{
    //Agrega un evento clic para cerrar el modal
    boton_cerrar_modal.addEventListener("click",()=>
    {
        modal_contenido.classList.add("modal_oculto");
    })


    //Agrega un evento clic para abrir el modal
    boton_open_modal.addEventListener('click',()=>
    {
        //Se utiliza para "try catch" para manejar posibles errores
        try
        { 
            modal_contenido.classList.remove("modal_oculto");
        }catch(error) //en caso de que el "boton cerrar" no funcione
        {
            console.error("Error al cerrar el modal", error);
        }
    });
}
else
{
    console.error("No se encontraron todos los elementos necesarios para el modal.");
}

