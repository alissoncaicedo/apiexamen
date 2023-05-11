export const getfilms = async () =>{
    const url = 'https://swapi.dev/api/films/'
    const peticion = await fetch(url)
    const datos = await peticion.json()

    return datos
}

export const getspecies = async () =>{
    const url = 'https://swapi.dev/api/species/'
    const peticion = await fetch(url)
    const datos = await peticion.json()

    return datos
}
