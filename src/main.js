const API_URL_query_parameters = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_RAMDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites/?limit=2';
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
// //Se puede usar reload() para que al abrir la pagina se carga la API
// // reload();

//Inicia el proyecto de los cats

//Manejo de errores
const spanError = document.getElementById('error');
//Funcion para llamar a dos elementos de la API
async function loadRandomCats() {
    const respuesta = await fetch(API_URL_RAMDOM);
    const data = await respuesta.json();
    console.log('>>>>>>>Data Random>>>>>' + data);

    if (respuesta.status !== 200) {
        spanError.innerHTML = 'Existió un error ' + respuesta.status;
        console.log('>>>>>> error>>>>>'+spanError);
    } else {
        const imagen1 = document.getElementById('img1');
        const imagen2 = document.getElementById('img2');
        imagen1.src = data[0].url;
        imagen2.src = data[1].url;

    }
}
// loadRandomCats();

/**
 * Funcion JS para llamar a 2 gatos favoritos
 */

async function loadFavoritesCats() {
    const response = await fetch(API_URL_FAVOURITES);
    // const data = await response.json();
    const data = await response;
    console.log('>>>>Data Favourites>>>>>>' + JSON.stringify(data));
    if (response.status !==200) {
        spanError.innerHTML = 'Existió un error ' + response.status +'>>'+response;
        console.log('>>>>>spanError>>>>' + spanError);
        console.log('>>>>>spanError>>>>' + response.json());
    }
}
loadFavoritesCats();
