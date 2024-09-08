//1. Introducción a JavaScript

//Ejercicio 2
let a = 4;
let b = 3;
let c = a + b;
console.log("a es: " + a);
console.log("b es: " + b);
console.log("c: La suma de a y b es " + c);

//Ejercicio 3
let nombre = prompt("¿Cuál es tu nombre?");
console.log("¡Hola, " + nombre + "!");

//2. Operadores lógicos y condicionales

//Ejercicio 1
a = 15;
b = 20;
c = 13;
console.log("a es: " + a);
console.log("b es: " + b);
console.log("c es: " + c);
if(a > b && a > c){
    console.log("El mayor de los tres números es " + a);
} else if (b > a && b > c){
    console.log("El mayor de los tres números es " + b);
} else {
    console.log("El mayor de los tres números es " + c);
} 

//Ejercicio 2
let numeroIngresado = prompt("Ingresa un número y te dire si es par o impar:");
if(numeroIngresado % 2 == 0){
    console.log("El número " + numeroIngresado + " es par.");
} else {
    console.log("El número " + numeroIngresado + " es impar.");
}

//3. Operadores de asignación y bucles

//Ejercicio 1
let decremento = 10;
while (decremento > 0){
    console.log(decremento);
    decremento--;
}

//Ejercicio 2
let mayorCien = 0;
do {
    mayorCien = prompt("Ingrese un número mayor a 100:");
} while (mayorCien <= 100);
console.log("El número " + mayorCien + " es mayor que cién.");

//4. Funciones de JavaScript

//Ejercicio 1
function esPar(numero){
    if (numero % 2 == 0){
        return true;
    } else{
        return false;
    }
}
console.log("El número 4 es par: " + esPar(4));
console.log("El número 3 es par: " + esPar(3));
console.log("El número 20 es par: " + esPar(20));
console.log("El número 15 es par: " + esPar(15));

//Ejercicio 2
function convertirCelsiusAFahrenheit(gradosC){
    let farenheit = gradosC * 1.8 + 32;
    return farenheit;
}
console.log("30°C equivalen a " + convertirCelsiusAFahrenheit(30) + "°F.");
console.log("10°C equivalen a " + convertirCelsiusAFahrenheit(10) + "°F.");
console.log("33°C equivalen a " + convertirCelsiusAFahrenheit(33) + "°F.");

//5. Objetos en JavaScript

//Ejercicio 1
let persona = {
    nombre: "Alberto",
    edad: 45,
    ciudad: "Godoy Cruz",
};
console.log("Ciudad: " + persona.ciudad);
persona.ciudad = persona.ciudad.replace("Godoy Cruz", "Maipú");
console.log("Ciudad: " + persona.ciudad);
console.log(persona);

//Ejercicio 2
let libro = {
    titulo: "El Gaucho Martín Fierro",
    autor: "José Hernández",
    fecha: 1872,

    esAntiguo: function(){
        let antiguedad = 2024 - this.fecha;
        if(antiguedad > 10){
            return true;
        } else {
            return false;
        }
    }
};
console.log("Libro: " + libro.titulo + ". Año: " + libro.fecha);
console.log("El libro '" + libro.titulo + "' es antiguo: " + libro.esAntiguo());

//6. Arrays

//Ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros2 = [];
let duplicado;
numeros.forEach(numero => {
    duplicado = numero * 2;
    numeros2.push(duplicado);
});
console.log("Lista de números: " + numeros);
console.log("Números multiplicados por dos: " + numeros2);

//Ejercicio 2
let pares = [];
for (let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        pares.push(i);
    }
}
console.log("Lista con los primeros diez números pares: " + pares);

//7. Introducción al DOM

//Ejercicio 1
document.getElementById("cambiarColor").addEventListener("click", function (){
    document.getElementById("color").style.color = "blue";
});

//Ejercicio 2
document.getElementById("formularioAlerta").addEventListener("submit", function(event){
    event.preventDefault();
    let mensaje = document.getElementById("mensaje").value;
    window.alert("Has ingresado: " + mensaje);
});

//8. Eventos en DOM

//Ejercicio 1
const elementos = document.querySelectorAll("li");
elementos.forEach(function(item){
    item.addEventListener("click", function (){
        console.log(item.textContent);
    });
});

//Ejercicio 2
const campo = document.getElementById("campo");
const deshabilitar = document.getElementById("deshabilitar");
const habilitar = document.getElementById("habilitar");
deshabilitar.addEventListener("click", function(){
    campo.disabled = true;
    campo.placeholder = "Deshabilitado.";
});
habilitar.addEventListener("click", function(){
    campo.disabled = false;
    campo.placeholder = "Ingrese su mensaje...";
});

//9. LocalStorage 

//Ejercicio 1
const formularioCorreo = document.getElementById("formularioCorreo");
const guardado = document.getElementById("guardado");
const eliminarCorreo = document.getElementById("eliminarCorreo");

function mostrarCorreo(email){
    guardado.innerHTML = `<div class="correoGuardado">Correo guardado: ${email}</div>`;
}

const correoGuardado = localStorage.getItem("correo");
if (correoGuardado) {
    mostrarCorreo(correoGuardado);
}

formularioCorreo.addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    localStorage.setItem("correo", email); 
    mostrarCorreo(email);
});

eliminarCorreo.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem("correo");
    guardado.innerHTML = "";
});
