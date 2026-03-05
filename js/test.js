// Ejercicio 1 - Hallar  el IVA 
let precioInicial = 15000;
let iva10 = 11;
let ivaResultado = precioInicial / iva10;
// console.log("El iva a pagar es:", ivaResultado);
const mostrarPrecio = document.getElementById('precioInicial');
const mostrarIva = document.getElementById('calculoIva');
// mostramos los resultados en el html
mostrarPrecio.textContent = "El precio ingresado es: " + precioInicial;
mostrarIva.textContent =  "El Iva a pagar es: " + ivaResultado;

// Ejercicio 2 - area y perimetro de un cuadrado
let ladoDelCuadrado = 40;
let areaDelCuadrado = ladoDelCuadrado + ladoDelCuadrado;
let perimetroDelCuadrado = ladoDelCuadrado * 4;
const lado = document.getElementById('ladoCuadrado');
const area = document.getElementById('areaCuadrado');
const perimetro = document.getElementById('perimetroCuadrado');
// mostramos los resultados en el html
lado.textContent = "Lado: " + ladoDelCuadrado;
area.textContent = "El area es: " + areaDelCuadrado;
perimetro.textContent = "El perimetro es: " + perimetroDelCuadrado;

// Ejercicio 3 - Saludo con alert!
let nameUser = prompt('Cual es tu nombre?');
alert('Hola ' + nameUser);

// Ejercicio 4 - Promedio de 3 numeros ingresados
let numero1 = prompt('Ingresa el primer numero: ');
let numero2 = prompt('Ingresa el segundo numero: ');
let numero3 = prompt('Ingresa el tercer numero: ');
let promedio = (parseInt(numero1)+parseInt(numero2)+parseInt(numero3))/3;
alert('El promedio es: ' + promedio);

// Ejercicio 5 - Número de km recorridos por un coche y litros consumidos
let km  = prompt('Ingresa la cantidad de kilometros recorridos:');
let lts = prompt('Ingrese la cantidad de litros consumidos');
let ltsPorKmRecorrido = km / lts;
alert('Consumision: ' + ltsPorKmRecorrido + 'L/Km.');

// Ejercicio 6 - hora a segundos
// 1h = 60min - 1min = 60 segundo
// x * 60min = convierte a minutos
// y * 60seg = convierte a segundos
let horaInput  = prompt('Ingresar hora:');
let horaToMinuto = horaInput * 60;
let minutoToSegundo = horaToMinuto * 60;
alert(horaInput + 'Hr. es igual a ' + minutoToSegundo + 'segundos.'); 

// Ejercicio 7 - Detector de unidades y decenas
let numIngresado = prompt('INGRESAR NUMERO: ');
let decenas = numIngresado / 10;
let unidades = numIngresado % 10;
alert('El nro ingresado tiene ' + decenas + 'decenas.\n' + 'Y ' + unidades + ' unidades.');

// Ejercicio 8 - patatas
let porcionesSolicitadas = prompt('INGRESAR NUMERO DE PORCIONES: ');
let patatasNecesariasGramos = 200 * porciones porcionesSolicitadas;
let huevosNecesarios = 1 * porcionesSolicitadas;
let cebollaNecesariaGramos = 60 * porcionesSolicitadas;
alert(
    'Se necesitaran ' + patatasNecesariasGramos + ' kg de patatas. \n' +
    huevosNecesarios + ' huevos\n'+
    cebollaNecesariaGramos + ' gramos de cebolla.'
);

// Ejercicio 9 - 