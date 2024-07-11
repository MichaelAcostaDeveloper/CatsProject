const API_URL_query_parameters = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_K2zNNzvRvDfVTwYQ8fS1icitJFrZCa4IO7hYfqUUjWExuVwK5mggUmxjG1ApH2KZ';


//Usando promesas
fetch(API_URL_query_parameters)
    .then(respuesta => respuesta.json())
    .then(data => {
        const imagen1 = document.getElementById('img1');
        const imagen2 = document.getElementById('img2');
        const imagen3 = document.getElementById('img3');

        imagen1.src = data[0].url;
        imagen2.src = data[1].url;
        imagen3.src = data[2].url;
    })
//Se puede usar reload() para que al abrir la pagina se carga la API
reload();

//Funcion para llamar a tres elementos de la API
async function llamarTresMichis() {



    const respuesta = await fetch(API_URL_query_parameters);
    const data = await respuesta.json();

    console.log('>>>>>>>' + data);

    const imagen1 = document.getElementById('img1');
    const imagen2 = document.getElementById('img2');
    const imagen3 = document.getElementById('img3');

    imagen1.src = data[0].url;
    imagen2.src = data[1].url;
    imagen3.src = data[2].url;
}