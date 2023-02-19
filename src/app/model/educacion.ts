export class Educacion {
    id?: number;
    titulo: string;
    institucion:string;
    descripcion:string;
    fechaInicio: string;
    fechaTerminacion: string;


    constructor(titulo: string, institucion:string, descripcion:string, fechaInicio:string, fechaTerminacion:string){

    this.titulo=titulo;
    this.institucion=institucion;
    this.descripcion=descripcion;
    this.fechaInicio=fechaInicio;
    this.fechaTerminacion=fechaTerminacion;


    }
}
