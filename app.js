// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Funcionalidades
1- Agregar nombres; Los usuarios escribirán un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "adicionar"
2- Validar entrada: si el campo de texto está vacío, el programa mostrará una alaerta poidiendo un nombre válido
3- Vizualisar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada
4- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página*/


let listaAmigos = [];



function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const amigo = inputAmigo.value.trim(); // Eliminar espacios al inicio y al final

    if (amigo === "") {
        //Salir de la función si el campo está vacío
        alert("Por favor, ingresa un nombre válido.");
        return; 

    }else if (listaAmigos.includes(amigo)) {
        // Validar si el amigo ya está en la lista
        alert('Este amigo ya está en la lista. Por favor, ingresa un nombre diferente.'); 
        inputAmigo.value = ""; // Limpiar el campo de entrada

    }else{
        // Agregar el amigo a la lista
        listaAmigos.push(amigo); 
        // Limpiar el campo de entrada
        inputAmigo.value = ""; 
        mostrarLista();
        console.log(listaAmigos);
    }
}

function mostrarLista(){
    const listaElemento = document.getElementById("listaAmigos");
    listaElemento.innerHTML = ""; // Limpiar la lista antes de mostrarla

    //Recorre el array y crea un elemento de lista para cada amigo 
    listaAmigos.forEach(amigo =>{
        const li = document.createElement('li');

        li.textContent = amigo; // Asignar el nombre del amigo al elemento de la lista

        listaElemento.appendChild(li); // Agregar el elemento de la lista al contenedor
    })
}

function sortearAmigo() {
    if(listaAmigos.length === 0){
        alert('No hay amigos en la lista para sortear. Por favor, agrega amigos primero.');
        return; // Salir de la función si la lista está vacía

    }else if (listaAmigos.length < 2){
        alert('Necesitas al menos dos amigos en la lista para realizar un sorteo.');
        return;

    }else{
        // crear un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); 

        // Obtener el amigo sorteado
        const amigoSorteado = listaAmigos[indiceAleatorio];
         
        // Mostrar el resultado en la página
        const resultadoAmigo = document.getElementById("resultado")

        //Eliminar el amigo de la lista después de sortearlo
        listaAmigos.splice(indiceAleatorio, 1);

        // Actualizar la lista visible
        mostrarLista(); 

        // Asignar el nombre del amigo sorteado al elemento de resultado
        resultadoAmigo.textContent = `El amigo sorteado es: ${amigoSorteado}`; 
    }


}
