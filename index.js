
// COMUNICANDOME CON UNA API, VEMOS EN EL H1 EL NOMBRE DE UN PERSONAJE SEGUN EL NUMERO EN EL LINK

// let infoMorty = []

// fetch('https://rickandmortyapi.com/api/character/8') // fetch busca info en APIs, recibe la api como parametro
//   .then(data => { // then significa: cuando lo anterior haya terminado, despues hacer tal cosa
//     return data.json();
//   })
//   .then((info) => {

//     console.log(info)
//     infoMorty = info 
//     const titulo = document.querySelector("h1");

//     titulo.textContent = info.name;


// });


///////// PARA TENER UNA TARJETITA CON INFO:


// fetch('https://rickandmortyapi.com/api/character/88') // el numero del final corresponde a un personaje diferente guardado en la API
//   .then((data) => {
//     return data.json();
//   })
//   .then((info) => {

//     console.log(info) // en consola voy a ver el nombre de los elementos que tengo que usar de la API, ej status, name...
//     const card = document.querySelector("section");

//     card.innerHTML = `
//     <article>
//     <div class="imagen">
//       <img src="${info.image}">
//     </div>
//     <div class="info">
//     <div class="nombre">
//       <h2>${info.name}</h2>
//     </div>
//     <div class="genero">
//       <p>${info.gender}</p>
//     </div>
//     <div class="estado">
//       <p>${info.status}</p>
//       - <p>${info.species}</p>
//     </div>
//     <div class="ubicacion">
//       <p>Last known location:</p>
//       <p>${info.location.name}</p>
//     </div>
//     <div class="episodio">
//       <p>First seen in:</p>
//       <p>${info.episode[0]}</p> 
//     </div>
//   </div>
//   </article>
//     `
//     // el cero en info.episode es para mostrar el primero

//   });


///////// PARA TENER MAS TARJETITAS CON INFO:
// con arrays 

// fetch('https://rickandmortyapi.com/api/character')
//   .then(data => {
//     return data.json();
//   })
//   .then(personajes => {
//     console.log(personajes);
//     const link = document.querySelector("#prox");
//     link.href = personajes.info.next
//     const seccion = document.querySelector('section');

//     seccion.innerHTML = '';
//     personajes.results.map(personaje => {
//       seccion.innerHTML += `
//     <article>
//     <div class="imagen">
//       <img src="${personaje.image}">
//     </div>
//     <div class="info">
//     <div class="nombre">
//       <h2>${personaje.name}</h2>
//     </div>
//     <div class="estado">
//       <p>${personaje.status}</p>
//       - <p>${personaje.species}</p>
//     </div>
//     <div class="ubicacion">
//       <p>Last known location:</p>
//       <p>${personaje.location.name}</p>
//     </div>
//     <div class="episodio">
//       <p>First seen in:</p>
//       <p>${personaje.episode[0]}</p>
//     </div>
//   </div>
//   </article>
//     `;
//     });
//   });



// hacer un next

const buscarInfo = (url) => {
fetch(url)
  .then(data => {
    return data.json();
  })
  .then(personajes => {
    console.log(personajes);
    const link = document.querySelector("#prox");
  
    link.onclick = (e) => {
      e.preventDefault()
      buscarInfo(personajes.info.next)
    }

    const seccion = document.querySelector('section');

    seccion.innerHTML = '';
    personajes.results.map(personaje => {
      seccion.innerHTML += `
    <article>
    <div class="imagen">
      <img src="${personaje.image}">
    </div>
    <div class="info">
    <div class="nombre">
      <h2>${personaje.name}</h2>
    </div>
    <div class="estado">
      <p>${personaje.status}</p>
      - <p>${personaje.species}</p>
    </div>
    <div class="ubicacion">
      <p>Last known location:</p>
      <p>${personaje.location.name}</p>
    </div>
    <div class="episodio">
      <p>First seen in:</p>
      <p>${personaje.episode[0]}</p>
    </div>
  </div>
  </article>
    `;
    });
  })
}


buscarInfo('https://rickandmortyapi.com/api/character')


// consejos para la tarea
// empiecen haciendo el fetch y recibiendo la info en la consola 
// maquetan en html 
// pasan la maqueta de html a javascript 
// USEN SASS 

// // comunicandonos con la api de marvel EN CLASE 75 ARREGLAMOS EL PROBLEMA, PORQUE NO ESTABA ANDANDO:

// fetch("https://gateway.marvel.com/v1/public/comics?apikey=cdf503fce8f2c519f899f64cff25fd79&offset=0&orderBy=title")
// .then((data) => {
//   return data.json()
// })
// .then((info) => {

//   console.log(info)
// })