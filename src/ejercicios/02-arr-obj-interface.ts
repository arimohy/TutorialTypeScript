let habilidades:String[]=["aaa","bbb","ccc"]

//interface para decir que tipos de datos tendra un obj
interface Persona{
    nombre:String;
    hp:number;
    habilidades:String[];
    puebloNatal?:String;//atribut opcional
}

const personaje:Persona={
    nombre:"yhomira",
    hp:4,
    habilidades:["aaa","bbb"]
}
personaje.puebloNatal="cusco";

console.table(personaje)