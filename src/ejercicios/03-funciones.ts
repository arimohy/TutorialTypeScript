
function sumar(a:number,b:number):number{
    return a+b
}

const suma=(a:number,b:number):number=>{
    return a+b;
}

function multiplicar(a:number,opcional?:number,b:number=2):number{
    return a*b
}

//const resultado=multiplicar(15,12)

//console.log(resultado)

interface PersonajeLOR{
    nombre:String;
    pv:number;
    mostrarHp:()=>void;
}

function curar(personaje:PersonajeLOR,CurarX:number):void{
    personaje.pv+=CurarX;
    console.log(personaje);

}
const nuevoPersonaje:PersonajeLOR={
    nombre: "Yhomira",
    pv: 50,
    mostrarHp() {
        console.log("Puentos de  vida",this.pv)
    }
}
curar(nuevoPersonaje,21)
nuevoPersonaje.mostrarHp();