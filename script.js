const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15"

//Async y await
async function listaImagenes(params) {
    try {
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        const card = document.querySelector("[data-ul]")
        //Modificamos el HTML con los datos de la API por medio de JS
        datosImagenes.forEach(elemento => {
            const contenido = 
                        `<li class="card">
                        <img class="card__image" src="${elemento.url}" alt="imagen">
                        <h3 class="card__title">${elemento.title}</h3>
                        </li>`
            //Hacemos los cambios en el HTML
            card.innerHTML = card.innerHTML + contenido
        });

    }

    catch (error){
        console.log(error)
    }
}

listaImagenes()    

/*function listaDeImagenes() {
    //El fetch API es una función que nos permite usar la API
    fetch(url)
    //En el then escribimos lo que debe pasar si se cumple la promesa
    .then( response => response.json())
    .then( datosImagenes => {
        //El console.log es para revisar que si se este conectando con la API
        console.log(datosImagenes)
        const card = document.querySelector("[data-ul]")
        //Modificamos el HTML con los datos de la API por medio de JS
        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card">
                        <img class="card__image" src="${elemento.url}" alt="imagen">
                        <h3 class="card__title">${elemento.title}</h3>
                    </li>`
            //Hacemos los cambios en el HTML
            card.innerHTML = card.innerHTML + contenido
        });
    })
    //El catch es por si la promesa no se cumple, y le hacemos un console.log para ver el error.
    .catch( error => console.log(error))
}

//Ponemos a trabajar la función
listaDeImagenes()*/