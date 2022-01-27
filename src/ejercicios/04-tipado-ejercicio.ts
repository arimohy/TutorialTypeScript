interface SuperHeroe{
    nombre:String;
    edad:number;
    direccion:Direccion;
    mostrarDireccion:()=>String;
    

}
interface Direccion{
    calle:String;
    pais:String;
    ciudad:String;
    
}

const superHeroe:SuperHeroe={
    nombre:"SpiderMan",
    edad:30,
    direccion:{
        calle:"Calle",
        pais:"USA",
        ciudad:"NY"
    },
    mostrarDireccion(){
        return this.direccion.calle +", "+this.direccion.pais+", "+this.direccion.ciudad;
    }
}

const direccion=superHeroe.mostrarDireccion();
console.log(direccion)