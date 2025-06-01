window.addEventListener("DOMContentLoaded", function(){
    let btnPeticion = this.document.getElementById("btnPedir");
    let inputInfo = this.document.getElementById("infoIntro");
    let imagen = this.document.getElementById("imagenAPI");
    let divInfo = this.document.getElementById("infoAPI");
    let item = this.document.getElementById("itemAPI");

    btnPeticion.addEventListener("click", pedirInfo);
    
    function pedirInfo(){

        let nombrePersonaje = inputInfo.value.toUpperCase();

        fetch("URL API" + nombrePersonaje)

            .then(res => {
                if(!res.ok) {
                    throw new Error("Personaje no encontrado") 
                }
                return res.json();
            })

            .then(data => {
                console.log(data)
                mostrarDatos(data)
            })

            .catch(error => {
                imagen.src="";
                divInfo.innerHTML = `<p id="rojo">${error.message}</p>`;
            })
    }

    function mostrarDatos(data){
        let urlImagen = /*PONER AQUI EL VALOR DE LA IMAGEN DE LA API;*/
        imagen.src = urlImagen;

        let nombre = /*PONER AQUI EL VALOR DEL NOMBRE DE LA API;*/
        /*PONER AQUI LAS CARACTERÍSTICAS QUE QUERAMOS SACAR DE LA API*/ 

        /*PONER LA CADENA DE INFORMACIÓN QUE QUERAMOS SACAR*/
        divInfo.innerHTML =  `<p><strong>${nombre}</strong></p><p><strong>Altura: </strong>${altura}</p>
                            <p><strong>Peso: </strong>${peso}</p><p><strong>Item: </strong>${nomItem}</p>`
    }
})
