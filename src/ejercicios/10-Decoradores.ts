function classDecorator<T extends{new (...arg: any[]):{}}>(
    constructor: T
){
    return class extends constructor{
        newProperty:"new proterty";
        hello="overrire"
    };
}
@classDecorator
class MiSuperClase{
    public miPropiedad:string="asvdfvf"

    imprimir(){
        console.log('Hola Mundo')
    }
}