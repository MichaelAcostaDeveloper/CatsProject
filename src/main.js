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
const API_URL_FAVOURITES_DELETE = (id) =>
    `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ`;
const API_URL_FAVOURITES_DELETE_IMPROVED = (id) =>
    `https://api.thecatapi.com/v1/favourites/${id}?`;
const API_URL_FAVOURITES_IMPROVED = 'https://api.thecatapi.com/v1/favourites/';
const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';
/**
 * Carga automatica de imagenes de gatos.
 */

loadRandomCats();
/**
 * Usando la libreria Axios
 */
const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1'
});
api.defaults.headers.common['X-API-KEY'] = 'live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';
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

//Variable para manejar mensajes y logs
const showMessage = document.getElementById('message');

//Funcion para llamar a dos elementos de la API
async function loadRandomCats() {
    // const respuesta = await fetch(API_URL_RAMDOM_WITH_ERROR);
    const respuesta = await fetch(API_URL_RAMDOM); //-> uso del metodo fetch para realizar llamadas a una api
    console.log('>>>>>Impresión de respuesta>>>>> ' + respuesta);
    console.log('>>>>>Impresión de respuesta.status>>>>> ' + respuesta.status);
    console.log('>>>>>Impresión de respuesta como usando JSON.strigify>>>>> ' + JSON.stringify(respuesta));


    const data = await respuesta.json();//-> uso del método .json() para formatear la respuesta de la llamada
    // la data recibida es un array
    console.log('>>>>>>Impresión de data usando respuesta.json()>>>>> ' + data);
    console.log('>>>>>>>Impresión de data aplicando JSON.stringify>>>>> ' + JSON.stringify(data));

    const dataWithOutJSON = await respuesta;//-> respuesta no formateada
    console.log('>>>>>>>Impresion de data sin formateo .json()>>>>>' + dataWithOutJSON);
    console.log('>>>>>>>Impresion de data sin formateo aplicando JSON.stringify>>>>> ' + JSON.stringify(dataWithOutJSON));

    if (respuesta.status !== 200) {
        showMessage.innerHTML = 'Existió un error ' + respuesta.status + ': ' + JSON.stringify(data);
        console.log('>>>>>> ShowMessage>>>>>' + showMessage);
    } else {
        showMessage.innerHTML = 'Conexion establecida ' + respuesta.status + ': ' + JSON.stringify(data);
        console.log('>>>>>> ShowMessage>>>>>' + showMessage);
        const imagen1 = document.getElementById('img1');
        const imagen2 = document.getElementById('img2');
        const boton1 = document.getElementById('bt1');
        const boton2 = document.getElementById('bt2');
        imagen1.src = data[0].url;
        imagen2.src = data[1].url;

        // boton1.onclick = () => saveFavouriteCats(data[0].id);
        // boton2.onclick = () => saveFavouriteCats(data[1].id);

        //Usando la libreria AXIOS
        boton1.onclick = () => saveCatsFavoritos(data[0].id);
        boton2.onclick = () => saveCatsFavoritos(data[1].id);
    }
}

//Funcion JS para llamar a 2 gatos favoritos
async function loadFavoritesCats() {
    try {
        // const response = await fetch(API_URL_FAVOURITES);
        // const response = await fetch(API_URL_FAVOURITES_WITHOUT_KEY);
        const response = await fetch(API_URL_FAVOURITES_IMPROVED,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ'
                }
            });
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);//-> Construyo el error con E en mayúsculas
        } else {
            const data = await response.json();
            const dataWithOutJSON = await response;
            console.log('>>>>Data Favourites>>>>>>' + JSON.stringify(data));
            console.log('>>>>Data Favourites without JSON>>>>>>' + JSON.stringify(dataWithOutJSON));
            showMessage.innerHTML = 'éxito!!! ' + '>>>>>>' + JSON.stringify(data);

            const seccion = document.getElementById('favoritesCatties');
            seccion.innerHTML = '';
            const h2 = document.createElement('h2');
            const h2Text = document.createTextNode('miCHIS favoritos');
            h2.appendChild(h2Text);
            seccion.appendChild(h2);
            data.forEach(michi => {
                const articulo = document.createElement('article');
                const imagen = document.createElement('img');
                const boton = document.createElement('button');
                const botonText = document.createTextNode('Sacar al michi de favoritos');

                boton.appendChild(botonText);
                boton.onclick = () => deleteFavouriteMichi(michi.id);
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

/**
 * Función JS para guardare a un gato favorito usando AXIOS
 */
async function saveCatsFavoritos(id){
    const {data, status} = await api.post('/favourites',{
        image_id:id,
    });

    const dataWhitOutJSON = data;
    console.log('>>>>>'+data);
    console.log('>>>>>'+dataWhitOutJSON);
    console.log('>>>>>'+status);

    if (status !== 200) {
        showMessage.innerHTML = 'Error >>>' + status + JSON.stringify(data);
    } else {
        console.log('El michi ' + data.id + 'se añadió con exito.');
        loadFavoritesCats();
    }
    console.log('>>>>>Save elements>>>>>');
    console.log('>>>data>>> ' + JSON.stringify(data));
    console.log('>>>dataWhitOutJSON>>> ' + dataWhitOutJSON);
}

//Función para guardar al cat favorito
async function saveFavouriteCats(id) {
    // const rest = await fetch(API_URL_FAVOURITES, {
    const rest = await fetch(API_URL_FAVOURITES_IMPROVED, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ'
        },
        body: JSON.stringify({
            image_id: id
        }),
    });
    const data = await rest.json();
    const dataWhitOutJSON = await rest;
    if (rest.status !== 200) {
        showMessage.innerHTML = 'Error >>>' + rest.status + data;
    } else {
        console.log('El michi ' + data.id + 'se añadió con exito.');
        loadFavoritesCats();
    }
    console.log('>>>>>Save elements>>>>>');
    console.log('>>>rest>>>> ' + JSON.stringify(rest));
    console.log('>>>data>>> ' + JSON.stringify(data));
    console.log('>>>dataWhitOutJSON>>> ' + dataWhitOutJSON);

}

//Función JS para eliminar un elemento de Favoritos
async function deleteFavouriteMichi(id) {
    const rest = await fetch(API_URL_FAVOURITES_DELETE_IMPROVED(id), {
        method: 'DELETE',
        headers: {
            'X-API-KEY': 'live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ'
        },
    });
    const data = await rest.json();
    const dataWhitOutJSON = await rest;
    if (rest.status !== 200) {
        showMessage.innerHTML = 'Error >>>' + rest.status + data;
    } else {
        console.log('Michi ' + data.id + ' eliminado de favoritos');
        loadFavoritesCats();
    }
    console.log('>>>>>Save elements>>>>>');
    console.log('>>>rest>>>> ' + JSON.stringify(rest));
    console.log('>>>data>>> ' + JSON.stringify(data));
    console.log('>>>dataWhitOutJSON>>> ' + dataWhitOutJSON);

}


//Función para subir fotos
async function uploadMichiPhoto(){
    const form = document.getElementById('uploadingForm');
    const formData = new FormData(form);
    console.log(formData.get('file'));

    const res = await fetch(API_URL_UPLOAD,{
        method:'POST',
        headers:{
            // 'Content-Type':'multipart/form-data',
            'X-API-KEY':'live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ'
        },
        body: formData,
    })
    const data = await res.json();
    if (res.status !== 201) {
        showMessage.innerHTML = 'Error>>>>>>' + res.status + data;
        console.log({data});
    } else {
        console.log('Foto del gato subida!!');
        console.log({data});
        console.log(data.url);
    }
}