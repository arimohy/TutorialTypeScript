import { calcularISV, Producto } from "./06-destructuracion-funcion";


const carritoCompras:Producto[]=[{
    desc:"telefono1",
    precio:100
},
{
    desc:"telefonito2",
    precio:150
}];
const [total,isv]=calcularISV(carritoCompras);
console.log("total :",total)
console.log("ISV: ",isv)

