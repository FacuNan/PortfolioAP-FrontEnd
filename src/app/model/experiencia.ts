export class Experiencia {
    id?: number;
    nombreE:string;
    institucion:string;
    descripcion: string;
    fechaInicio: string;
    fechaTerminacion:string;

    constructor(nombreE: string, institucion: string, descripcion:string, fechaInicio: string, fechaTerminacion:string){
        this.nombreE=nombreE;
        this.institucion=institucion;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaTerminacion=fechaTerminacion;
    }
}
