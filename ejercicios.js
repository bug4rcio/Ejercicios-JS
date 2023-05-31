//Ejercicio1
let frutas = [];
console.log(frutas);

class Ejercicio1{
  agregarFrutas(){
    frutas.push("manzana", "plátano", "pera");
    return frutas;
  }
  quitarFruta(){
    frutas.pop();
    return frutas;
  }
  agregarNaranja(){
    frutas.unshift("naranja");
    return frutas;
  }
  shiftFruta(){
    frutas.shift();
    return frutas;
  }
};
const ejercicio1 = new Ejercicio1;
ejercicio1.agregarFrutas();
ejercicio1.quitarFruta();
ejercicio1.agregarNaranja();
ejercicio1.shiftFruta();
console.log(frutas);


//Ejercicio2
let numeros = ["10", "20", "30", "40", "50"];
console.log(numeros);

class Ejercicio2{
  verificarNum(){
    numeros.includes("30");
    return numeros;
  }
  encuentraNum(){
    numeros.indexOf("40");
    return numeros;
  }
  accederPos(){
    numeros[2];
    return numeros;
  }
};
const ejercicio2 = new Ejercicio2;
ejercicio2.verificarNum();
ejercicio2.encuentraNum();
ejercicio2.accederPos();



//Ejercicio3
let nombres = ["Ana", "Pedro", "Luis", "María"];
console.log(nombres);

class Ejercicio3{
  crearCadena(){
    nombres.join(", ");
    return nombres;
  }
  invertirArreglo(){
    nombres.reverse();
    return nombres;
  }
  ordenarArreglo(){
    nombres.sort();
    return nombres;
  }
  
};
const ejercicio3 = new Ejercicio3;
ejercicio3.crearCadena();
ejercicio3.invertirArreglo();
ejercicio3.ordenarArreglo();
console.log(nombres);


//Ejercicio4
let original = ["a", "b", "c"];
console.log(original);
const copia = original.slice();
const concatenacion = original.concat(copia);

class Ejercicio4{
  crearCopia(){
    const copia = original.slice();
    return copia;
  }
  agregarD(){
    copia.push("d");
    return copia;
  }
  concatenar(){
    const concatenacion = original.concat(copia);
    return concatenacion;
  }
};
const ejercicio4 = new Ejercicio4;
ejercicio4.crearCopia();
ejercicio4.agregarD();
ejercicio4.concatenar();
console.log(concatenacion);
