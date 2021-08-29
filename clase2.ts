import { Resta } from "./resta";
import { Suma } from "./suma"


function operacion (num1: number, num2: number, type: string) {
    
    if (type == "Resta" || "resta") {
        import("./resta")
        .then(() => { 
            let resta = new Resta(num1, num2);
            resta.operacion();
        })
    } if (type == "Suma" || "suma") {
        import("./suma") 
        .then(() => { 
            let suma = new Suma(num1, num2);
            suma.operacion()
        })
    } else {
        console.log("Tipo de operación no especificado");
    }
    
    
}

/* function operaciones () {

} */

const sumando = operacion(10, 10, "resta");
console.log(sumando);



