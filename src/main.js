const API_URL_query_parameters = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_RAMDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_RAMDOM_WITH_ERROR = 'https://api.thecatapi.com/v1/favourites/?limit=2';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites/?limit=2&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_FAVOURITES_WITHOUT_KEY = 'https://api.thecatapi.com/v1/favourites/?limit=2';
// //Usando promesas
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

//Variable para manejar errores
const spanError = document.getElementById('error');

//Funcion para llamar a dos elementos de la API
async function loadRandomCats() {
    // const respuesta = await fetch(API_URL_RAMDOM);
    const respuesta = await fetch(API_URL_RAMDOM_WITH_ERROR);
    console.log('>>>>>respuesta>>>>>'+respuesta);
    console.log('>>>>>respuesta.status>>>>>'+respuesta.status);
    console.log('>>>>>respuesta como Objeto>>>>>'+JSON.stringify(respuesta));

    // const data = await respuesta.json();
    // console.log(data);
    // console.log('>>>>>>>Data Random>>>>>' + data);
    // console.log('>>>>>>>Data Random>>>>>' + JSON.stringify(data));
    // const dataWithOutJSON = await respuesta;
    // console.log('>>>>>>>Data Random without JSON>>>>>' + JSON.stringify(dataWithOutJSON));

    // if (respuesta.status !== 200) {
    //     spanError.innerHTML = 'Existió un error ' + respuesta.status +' >>>> '+dataWithOutJSON;
    //     console.log('>>>>>> spanError>>>>>' + spanError);
    // } else {
    //     spanError.innerHTML = 'Conexion establecida ' + respuesta.status +' >>>> '+respuesta;
    //     console.log('>>>>>> spanError>>>>>' + spanError);
    //     const imagen1 = document.getElementById('img1');
    //     const imagen2 = document.getElementById('img2');
    //     imagen1.src = data[0].url;
    //     imagen2.src = data[1].url;
    // }
}

//Funcion JS para llamar a 2 gatos favoritos
async function loadFavoritesCats() {
    const response = await fetch(API_URL_FAVOURITES);
    //const response = await fetch(API_URL_FAVOURITES_WITHOUT_KEY);
    const data = await response.json();
    const dataWithOutJSON = await response;
    console.log('>>>>Data Favourites>>>>>>' + JSON.stringify(data));
    console.log('>>>>Data Favourites without JSON>>>>>>' + JSON.stringify(dataWithOutJSON));
    if (response.status !== 200) {
        spanError.innerHTML = 'Existió un error ' + response.status + '>>' + response;
        console.log('>>>>>spanError>>>>' + spanError);
        console.log('>>>>>response>>>>' + response.json());
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
        spanError.innerHTML = 'Error >>>' + rest.status + rest;
    }
    console.log('>>>>>Save elements>>>>>');
    console.log('>>>rest>>>> '+JSON.stringify(rest));
    console.log('>>>data>>> '+JSON.stringify(data));
    console.log('>>>dataWhitOutJSON>>> '+dataWhitOutJSON);

}