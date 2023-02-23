export class Skills {
    id?: number;
    nombre: string;
    porcentaje: number;
    radius: number;
    colorExterno: string;
    colorInterno: string;

    constructor(nombre: string, porcentaje: number, radius: number, colorExterno: string, colorInterno: string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.radius = radius;
        this.colorExterno = colorExterno;
        this.colorInterno = colorInterno;

    }
}

