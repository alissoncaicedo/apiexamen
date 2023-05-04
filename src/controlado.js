import { getfilms } from "../services/ServiciosStarwars.js";
import { getspacies } from "../services/ServiciosStarwars.js";

let fila = document.querySelector("#fila")

getfilms()
.then((datos)=>{
    datos.results.map((results)=>{
        fila.innerHtml += results.name
    
    })
})
getspacies()
.then((datos)=>{
    datos.results.map((results)=>{
        fila.innerHtml += results.name
    
    })
})