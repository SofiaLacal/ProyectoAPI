window.addEventListener("DOMContentLoaded", function () {
    let btnPeticion = document.getElementById("btnPedir");
    let inputInfo = document.getElementById("infoIntro");
    let imagen = document.getElementById("imagenAPI");
    let divInfo = document.getElementById("infoAPI");
    let divGenero = document.getElementById("infoGenero");
    let divEstado = document.getElementById("infoEstado");

    

    btnPeticion.addEventListener("click", function () {
        let valor = inputInfo.value.trim().toLowerCase();
        divInfo.innerHTML = "";
        divGenero.innerHTML = "";
        divEstado.innerHTML = "";
        imagen.src = "";
        imagen.style.display = "none";


        // Buscar por ID
        if (!isNaN(valor)) {

            fetch(`https://rickandmortyapi.com/api/character/${valor}`)
                .then(res => {
                    if (!res.ok){
                        throw new Error("Personaje no encontrado");
                    } 
                    return res.json();
                })
                .then(data => {
                    mostrarDatos(data);
                })
                .catch(error => {
                    divInfo.innerHTML = `<p id="rojo">${error.message}</p>`;
                });


        // Buscar por género
        } else if (["male", "female", "genderless", "unknown"].includes(valor)) {

            fetch(`https://rickandmortyapi.com/api/character/?gender=${valor}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("No se encontraron personajes con ese género");
                    }
                    return res.json();
                })
                .then(data => {
                    mostrarGenero(data.results);
                })
                .catch(error => {
                    divGenero.innerHTML = `<p id="rojo">${error.message}</p>`;
                });

                
        // Buscar por estado
        } else if (["alive", "dead", "unknown"].includes(valor)) {
            fetch(`https://rickandmortyapi.com/api/character/?status=${valor}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("No se encontraron personajes con ese estado");
                    }
                    return res.json();
                })
                .then(data => {
                    mostrarEstado(data.results);
                })
                .catch(error => {
                    divEstado.innerHTML = `<p id="rojo">${error.message}</p>`;
                });

        } else {
            divInfo.innerHTML = `<p id="rojo">Entrada no válida. 
            Usa un ID (número), género (male/female/genderless/unknown) o estado (alive/dead/unknown).</p>`;
        }
    });

    function mostrarDatos(data) {
        imagen.src = data.image;
        imagen.style.display = "block";
        divInfo.innerHTML = `
            <p><strong>${data.name}</strong></p>
            <p><strong>Género: </strong>${data.gender}</p>
            <p><strong>Especie: </strong>${data.species}</p>
            <p><strong>Estado: </strong>${data.status}</p>
            <p><strong>Origen: </strong>${data.origin.name}</p>
        `;
    }

    function mostrarGenero(lista) {
        divGenero.innerHTML = "<h3>Personajes con ese género:</h3>";
        lista.forEach(p => {
            divGenero.innerHTML += `<p>${p.name} (${p.gender})</p>`;
        });
    }

    function mostrarEstado(lista) {
        divEstado.innerHTML = "<h3>Personajes con ese estado:</h3>";
        lista.forEach(p => {
            divEstado.innerHTML += `<p>${p.name} (${p.status})</p>`;
        });
    }
});