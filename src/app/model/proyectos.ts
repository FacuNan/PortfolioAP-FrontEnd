export class Proyectos {
    id?: number;
    nombreProyecto: string;
    img: string;
    descripcion:string;
    link: string;

    constructor(nombreProyecto: string, img: string, descripcion: string, link: string){
        this.nombreProyecto = nombreProyecto;
        this.img= img;
        this.descripcion=descripcion;
        this.link=link;
    }

}
