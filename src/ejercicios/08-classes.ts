class PersonaNormal{


    constructor(
        public nombre:string,
        public direccion:string
        ){
            
        }
}

class Heroe extends PersonaNormal{
    //private alterEgo:string;
    //public edad:number;
    //public nombreReal:number;
    //constructor
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string)
        {
            super(nombreReal,"new york, USA");
        }


}

const iroman =new Heroe('Iroman',15,"tom start");
console.log(iroman)