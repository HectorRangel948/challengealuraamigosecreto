// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaDeAmigos =[];

const agregarAmigo = ()=>{

    const amigo = document.getElementById("amigo").value.trim();
    if(amigo.length>0){
        
        const nuevoElemento = document.createElement("li");
        const nuevoNombre= document.createTextNode(amigo);
        nuevoElemento.appendChild(nuevoNombre);
    
        const lista= document.getElementById("listaAmigos");
        lista.appendChild(nuevoElemento);
        listaDeAmigos.push(amigo);
    }

    else{
        alert("Agrega un nombre válido");
    }

    const limpiarInput = document.getElementById("amigo");
    limpiarInput.value="";
}


const sortearAmigo=()=>{
    const numeroAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    const resultado= (listaDeAmigos[numeroAleatorio]);

    const nuevoElemento = document.createElement("li");
    const nuevoNombre= document.createTextNode(resultado);
    nuevoElemento.appendChild(nuevoNombre);
    const lista= document.getElementById("resultado");
    lista.appendChild(nuevoElemento);
}