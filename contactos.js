// Definir una lista de contactos con datos predefinidos
var listaContactos = [
    "felipe chacon",
    "andres pardo",
    "carlos torres",
    "santiago castro"

];
// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreApellido){
    listaContactos.push(nombreApellido);
}
  
// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido){ 
    var index = listaContactos.indexOf(nombreApellido);
    if (index !==-1);{
        listaContactos.splice(index,1);
        }
    }
    //funcion para imprimir los contacots en la consola     
    function imprimirContacto(){
        console.log(listaContactos);
        for(var i=0; i<listaContactos.length; i++){
            console.log(listaContactos[i]);
        }
    }
    //agregar un contacto
    agregarContacto("ana martinez");

    //borrar un contacto
    borrarContacto("maria Rodriguez");

    imprimirContacto();
