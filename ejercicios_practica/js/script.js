"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
*/

// boton.onclick = () =>{
//      console.log(personaje.value)
//      }
// getCharacter()

const personaje = document.getElementById("personaje")
const boton = document.getElementById("btnConsultar")
let body = document.querySelector("body");
const linebreak = document.createElement("br")


boton.onclick = async () =>{
    try {
        const character = await getCharacter(personaje.value);
        renderCharacter(character)
    } catch (error) {
        console.error('Error: ' , error)
        throw new Error('Error : '+  error.message)  
    }

}
async function  getCharacter  (personaje)  {
    const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`
    const response = await fetch(url, {
        // method : 'GET',
    })
    const data = await response.json();
    if(response.ok) {
        console.log(data)
        return(data)
    }else{
        console.error('Response returner with errors:', data);
        throw new Error('Error al obtener el personaje');
    }
}

function renderCharacter (character) {
    let title = document.createElement("h1")
    title.textContent = character.results[0].name;
    body.appendChild(title);

    let paragraph = document.createElement("p")
    paragraph.textContent = character.results[0].status + " - " + character.results[0].species
    body.appendChild(paragraph)

    let img = document.createElement("img");
    img.src = character.results[0].image;
    body.appendChild(img)

    let img2 = document.createElement("img");
    img2.src = 'data:image/jpeg;base64,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'
    body.appendChild(img2)

}
