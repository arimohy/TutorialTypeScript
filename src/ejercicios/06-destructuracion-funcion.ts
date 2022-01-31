interface Producto{
    desc:String;
    precio: number;

}

const telefono:Producto={
    desc:"Nokica A1",
    precio:120
}
const telefono2:Producto={
    desc:"sansung",
    precio:45
}
function calcularISV(productos :Producto[]):[number,number]{
    let total =0;
    productos.forEach(({precio})=>{
        total+=precio
    })
    return [total,total*0.15]
}
const articulos=[telefono,telefono2]
const [total,isv] =calcularISV(articulos);
console.log("Total: " ,total)
console.log("isv:",isv)