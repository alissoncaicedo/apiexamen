import { getfilms, getspecies } from "../services/ServiciosStarwars.js";

let fila = document.querySelector("#fila")

getfilms()
.then((datos)=>{
    datos.results.map((result)=>{
        fila.innerHtml += 
        `
        <section>
            <h1>${result.tittle}</h1>
            <h1>${result.episode_id}</h1>
        </section>
        `
        
    })
    console.log(datos)

})
getspecies()
.then((datos)=>{
    datos.results.map((result)=>{
        fila.innerHtml += 
        `
        <section>
            <h1>${result.name}</h1>
            <h1>${result.language}</h1>
        </section>
        `
        
    })
    console.log(datos)

})
