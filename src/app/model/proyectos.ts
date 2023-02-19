export class Proyectos {
    id?: number;
    nombreProyecto: string;
    img: string;
    descripcion:string;

    constructor(nombreProyecto: string, img: string, descripcion: string){
        this.nombreProyecto = nombreProyecto;
        this.img= img;
        this.descripcion=descripcion
    }

}
