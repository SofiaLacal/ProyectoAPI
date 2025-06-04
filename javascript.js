window.addEventListener("DOMContentLoaded", function(){
    let btnPeticion = this.document.getElementById("btnPedir");
    let inputInfo = this.document.getElementById("infoIntro");
    let imagen = this.document.getElementById("imagenAPI");
    let divInfo = this.document.getElementById("infoAPI");
    let divGenero = this.document.getElementById("infoGenero");
    let divEstado = this.document.getElementById("infoEstado");
    


    btnPeticion.addEventListener("click", pedirInfo);
    
    function pedirInfo(){

        let idPersonaje = inputInfo.value;
        let genero = inputInfo.value;
        let estado = inputInfo.value;

        // Búsqueda por ID
        fetch("https://rickandmortyapi.com/api/character/" + idPersonaje)

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

        //Búsqueda por género
         fetch("https://rickandmortyapi.com/api/character/" + genero)

            .then(res => {
                if(!res.ok) {
                    throw new Error("Personaje no encontrado") 
                }
                return res.json();
            })

            .then(data => {
                console.log(data)
                mostrarEstado(data)
            })

            .catch(error => {
                imagen.src="";
                divInfo.innerHTML = `<p id="rojo">${error.message}</p>`;
            })

        //Búsqueda por género
         fetch("https://rickandmortyapi.com/api/character/" + estado)

            .then(res => {
                if(!res.ok) {
                    throw new Error("Personaje no encontrado") 
                }
                return res.json();
            })

            .then(data => {
                console.log(data)
                mostrarGenero(data)
            })

            .catch(error => {
                imagen.src="";
                divInfo.innerHTML = `<p id="rojo">${error.message}</p>`;
            })


    }

    function mostrarDatos(data){
        let urlImagen = data.image
        imagen.src = urlImagen;

        let nombre = data.name 
        let especie = data.species
        let estatus = data.status
        let genero = data.gender
        let origen = data.origin.name

        divInfo.innerHTML =  `<p><strong>${nombre}</strong></p>
        <p><strong>Género: </strong>${genero}</p>
        <p><strong>Especie: </strong>${especie}</p>
        <p><strong>Estado: </strong>${estatus}</p>
        <p><strong>Origen: </strong>${origen}</p>`
    }

    function mostrarEstado(data){
        let urlImagen = data.image
        imagen.src = urlImagen;

        let nombre = data.name 
        let estatus = data.status

        divEstado.innerHTML =  `<p><strong>${nombre}</strong></p>
        <p><strong>Género: </strong>${genero}</p>
        <p><strong>Especie: </strong>${especie}</p>
        <p><strong>Estado: </strong>${estatus}</p>
        <p><strong>Origen: </strong>${origen}</p>`

    }

    function mostrarGenero(data){
        let urlImagen = data.image
        imagen.src = urlImagen;

        let nombre = data.name 
        let genero = data.gender

        divGenero.innerHTML =  `<p><strong>${nombre}</strong></p>
        <p><strong>Género: </strong>${genero}</p>`
    }
})
