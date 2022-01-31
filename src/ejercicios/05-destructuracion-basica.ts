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

/*console.log("El volumen es: ",volumen)
console.log("El segundo es: ",segundo)
console.log("La cancion es: ",cancion)
console.log("El autor es: ",autor)*/

const dbz:String[]=["Goku","vegeta","trunks"]
const [p1,p2,p3] =dbz;
//cosnt [, , p3]=dbz //para destructurar 1 solo
console.log('personaje',p1)
console.log('personaje',p2)
console.log('personaje',p3)
