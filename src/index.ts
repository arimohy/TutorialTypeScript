/*
    ===== Código de TypeScript =====
*/
interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:String;
    detalles:Detalles;
}
interface Detalles{
    autor:String;
    anio:number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor:'Ed Sheeran',
        anio:2015
    }
}
const {volumen,segundo,cancion,detalles:{autor}}=reproductor

//const {autor}=detalles

console.log("El volumen es: ",volumen)
console.log("El segundo es: ",segundo)
console.log("La cancion es: ",cancion)
console.log("El autor es: ",autor)