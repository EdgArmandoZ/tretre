//Definir la clase Task
export class Tarea {
    descripcion: string;
    completado: boolean;

    //Constructor de la clase Tarea
    constructor(descripcion: string) {
        this.descripcion = descripcion;
        this.completado = false;
    }

    //Metodo para marcar la tarea como completada
    tareaCompletada() {
        this.completado = !this.completado;
    }


}

