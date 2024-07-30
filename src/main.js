const API_URL_query_parameters =
    'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_RAMDOM =
    'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_RAMDOM_WITH_ERROR =
    'https://api.thecatapi.com/v1/favourites/?limit=3';
const API_URL_FAVOURITES =
    'https://api.thecatapi.com/v1/favourites/?api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_FAVOURITES_WITHOUT_KEY =
    'https://api.thecatapi.com/v1/favourites/?limit=2';
/**
 * Usando promesas
 */
// fetch(API_URL_query_parameters)
//     .then(respuesta => respuesta.json())
//     .then(data => {
//         const imagen1 = document.getElementById('img1');
//         const imagen2 = document.getElementById('img2');

//         imagen1.src = data[0].url;
//         imagen2.src = data[1].url;
//         imagen3.src = data[2].url;
//     })
/**
 * Inicia el proyecto de los cats
 * */

//Variable para manejar mensajes
const showMessage = document.getElementById('message');

//Funcion para llamar a dos elementos de la API
async function loadRandomCats() {
    // const respuesta = await fetch(API_URL_RAMDOM_WITH_ERROR);
    const respuesta = await fetch(API_URL_RAMDOM); //-> uso del metodo fetch para realizar llamadas a una api
    console.log('>>>>>Impresión de respuesta>>>>> ' + respuesta);
    console.log('>>>>>Impresión de respuesta.status>>>>> ' + respuesta.status);
    console.log('>>>>>Impresión de respuesta como usando JSON.strigify>>>>> ' + JSON.stringify(respuesta));
    showMessage.innerHTML = 'Existió un error ' + respuesta.status;


    const data = await respuesta.json();//-> uso del método .json() para formatear la respuesta de la llamada
    console.log('>>>>>>Impresión de data usando respuesta.json()>>>>> ' + data);
    console.log('>>>>>>>Impresión de data aplicando JSON.stringify>>>>> ' + JSON.stringify(data));

    const dataWithOutJSON = await respuesta;//-> respuesta no formateada
    console.log('>>>>>>>Impresion de data sin formateo .json()>>>>>' + dataWithOutJSON);
    console.log('>>>>>>>Impresion de data sin formateo aplicando JSON.stringify>>>>> ' + JSON.stringify(dataWithOutJSON));



    if (respuesta.status !== 200) {
        showMessage.innerHTML = 'Existió un error ' + respuesta.status + ' >>>> ' + dataWithOutJSON;
        console.log('>>>>>> ShowMessage>>>>>' + showMessage);
    } else {
        showMessage.innerHTML = 'Conexion establecida ' + respuesta.status + ' >>>> ' + JSON.stringify(data);
        console.log('>>>>>> ShowMessage>>>>>' + showMessage);
        const imagen1 = document.getElementById('img1');
        const imagen2 = document.getElementById('img2');
        imagen1.src = data[0].url;
        imagen2.src = data[1].url;
    }
}

//Funcion JS para llamar a 2 gatos favoritos
async function loadFavoritesCats() {
    try {
        const response = await fetch(API_URL_FAVOURITES);
        // const response = await fetch(API_URL_FAVOURITES_WITHOUT_KEY);
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);//-> Construyo el error con E en mayúsculas
        } else {
            const data = await response.json();
            const dataWithOutJSON = await response;
            console.log('>>>>Data Favourites>>>>>>' + JSON.stringify(data));
            console.log('>>>>Data Favourites without JSON>>>>>>' + JSON.stringify(dataWithOutJSON));
            showMessage.innerHTML = 'éxito!!! ' + '>>>>>>' + JSON.stringify(data);
            data.forEach(michi => {
                const seccion = document.getElementById('favoritesCatties');
                const articulo = document.createElement('article');
                const imagen = document.createElement('img');
                const boton = document.createElement('button');
                const botonText = document.createTextNode('Sacar al michi de favoritos');

                boton.appendChild(botonText);
                imagen.src = michi.image.url;
                imagen.width = 100;

                articulo.appendChild(imagen);
                articulo.appendChild(boton);

                seccion.appendChild(articulo);
            });

        }

    } catch (error) {
        console.error('Error: ' + error);
        showMessage.innerHTML = 'Existió un error ' + '>>>>>>' + error.message;
    }

}

//Función para guardar al cat favorito
async function saveFavouriteCats() {
    const rest = await fetch(API_URL_FAVOURITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: 'dje'
        }),
    });
    const data = await rest.json();
    const dataWhitOutJSON = await rest;
    if (rest.status !== 200) {
        showMessage.innerHTML = 'Error >>>' + rest.status + data;
    }
    console.log('>>>>>Save elements>>>>>');
    console.log('>>>rest>>>> ' + JSON.stringify(rest));
    console.log('>>>data>>> ' + JSON.stringify(data));
    console.log('>>>dataWhitOutJSON>>> ' + dataWhitOutJSON);

}