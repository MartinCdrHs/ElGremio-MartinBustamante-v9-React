import MOCK_DATA from "../Data/MOCK_DATA.json";

export const buscarJuegos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            resolve (MOCK_DATA)
        }, 1500)
    })
}

export const buscarDetalles = (id) => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve (MOCK_DATA.find( juego => juego.id === id))
        }, 1500)
    })
}


