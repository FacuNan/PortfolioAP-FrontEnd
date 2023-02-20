export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    img:String;
    biografia: String;

    constructor( nombre:String, apellido: String, img: String, biografia: String){
        this.nombre=nombre;
        this.apellido = apellido;
        this.img = img;
        this.biografia = biografia;
    }

}