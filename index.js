const now = new Date();

const year = now.getFullYear();
let month = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
let weekDay = now.getDay();

switch(weekDay) {
    case 0:
        weekDay = 'Domingo';
        break;
    case 1:
        weekDay = 'Lunes';
        break;
    case 2:
        weekDay = 'Martes';
        break;
    case 3:
        weekDay = 'Miércoles';
        break;
    case 4:
        weekDay = 'Jueves';
        break;
    case 5:
        weekDay = 'Viernes';
        break;
    case 6:
        weekDay = 'Sábado';
        break;
}
switch(month) {
    case 1:
        month = 'Enero';
        break;
    case 2:
        month = 'Febrero';
        break;
    case 3:
        month = 'Marzo';
        break;
    case 4:
        month = 'Abril';
        break;
    case 5:
        month = 'Mayo';
        break;
    case 6:
        month = 'Junio';
        break;
    case 5:
        month = 'Julio';
        break;
    case 8:
        month = 'Agosto';
        break;
    case 9:
        month = 'Septiembre';
        break;
    case 10:
        month = 'Octubre';
        break;
    case 11:
        month = 'Noviembre';
        break;
    case 12:
        month = 'Diciembre';
        break;
}


console.log(`Hoy es ${weekDay} ${day} de ${month} del ${year}. Son las ${hour}:${minutes}`);

console.log('=============================================')


// ### Ejercicios: Nivel 1

// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = 'Juan Carlos';
let lastName = 'Fernández';
let country = 'España';
let city = 'Madrid';
let age = 28;
let isMarried = false;
let year2 = 2023;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year2);

// 2. Verifique si typeof '10' es igual a 10
console.log(typeof '10' === 10);
// 3. Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') === 10);
// 4. Verifique cualquier valor booleano true o false.
console.log(true);

//    1. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log(true);
console.log('true');
console.log(4);

//    2. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log(null);
console.log(undefined);
console.log(0);

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

console.log('=============================================')

//    1. 4 > 3 // true
console.log(4 > 3)
//    2. 4 >= 3 // true
console.log(4 >= 3)
//    3. 4 < 3 // false
console.log(4 < 3)
//    4. 4 <= 3 // false
console.log(4 <= 3)
//    5. 4 == 4 // true
console.log(4 == 4)
//    6. 4 === 4 // true
console.log(4 === 4)
//    7. 4 != 4 // false
console.log(4 != 4)
//    8. 4 !== 4 // false
console.log(4 !== 4)
//    9. 4 != '4' // false
console.log(4 != '4')
//    10. 4 == '4' // true
console.log(4 == '4')
//    11. 4 === '4' // false
console.log(4 === '4')
//    12. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
console.log('python'.length != 'jargon'.length);

// 6. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

console.log('=============================================')

//    1. 4 > 3 && 10 < 12 // true
console.log(4 > 3 && 10 < 12)
//    2. 4 > 3 && 10 > 12 // false
console.log(4 > 3 && 10 > 12)
//    3. 4 > 3 || 10 < 12 // true
console.log(4 > 3 || 10 < 12)
//    4. 4 > 3 || 10 > 12 // true
console.log(4 > 3 || 10 > 12)
//    5. !(4 > 3) // false
console.log(!(4 > 3))
//    6. !(4 < 3) // true
console.log(!(4 < 3))
//    7. !(false) // true
console.log(!(false))
//    8. !(4 > 3 && 10 < 12) // false
console.log(!(4 > 3 && 10 < 12))
//    9. !(4 > 3 && 10 > 12) // true
console.log(!(4 > 3 && 10 > 12))
//    10. !(4 === '4') // true
console.log(!(4 === '4'))
//    11. No hay 'on' tanto en dragon como en python // false

console.log('=============================================')

// 7. Utilice el objeto Date para realizar las siguientes actividades
const now2 = new Date();

const year3 = now.getFullYear();
let month2 = now.getMonth() + 1;
const day2 = now.getDate();
const hour2 = now.getHours();
const minutes2 = now.getMinutes();
const seconds2 = now.getSeconds();
let weekDay2 = now.getDay();

//    1. ¿Qué año es hoy?
console.log(year3);
//    2. ¿Qué mes es hoy con un número?
console.log(month2);
//    3. ¿Qué fecha es hoy?
console.log(now2);
//    4. ¿Qué día es hoy con un número?
console.log(weekDay2);
//    5. ¿Cuál es la hora actual?
console.log(hour2);
//    6. ¿Cuántos minutos hay actualmente?
console.log(minutes2);
//    7. Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(now2.getTime());


console.log('===============================================================================================')

// ### Ejercicios: Nivel 2

// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
let base = parseInt(prompt('Introduzca la base: '));
let altura = parseInt(prompt('Introduzca la altura: '));
let area = 0.5 * base * altura;
alert(`El área del triángulo es ${area}`);
console.log(`El área del triángulo es: ${area}`);

//    ```sh
//    Ingrese base: 20
//    Ingrese altura: 10
//    El área del triángulo es: 100
//    ```

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
let ladoA = parseInt(prompt('Introduce el primer lado: '));
let ladoB = parseInt(prompt('Introduce el segundo lado: '));
let ladoC = parseInt(prompt('Introduce el tercer lado: '));
let p = ladoA + ladoB + ladoC;
alert(`El perímetro es: ${p}`);
console.log(`El perímetro es: ${p}`);

//    ```sh
//    Ingrese lado a: 5
//    Ingrese lado b: 4
//    Ingrese lado c: 3
//    El perimetro del triangulo es: 12
//    ```

console.log('=============================================');

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
let largo = parseInt(prompt('Introduzca el largo: '));
let ancho = parseInt(prompt('Introcuzca el ancho: '));
let areaRectangulo = largo * ancho;
let pRectangulo = 2 * (largo * ancho);
alert(`El área del rectángulo es ${areaRectangulo}, y el perímetro es ${pRectangulo}`);
console.log(`El área del rectángulo es ${areaRectangulo}, y el perímetro es ${pRectangulo}`);
// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
let radio = parseInt(prompt('Introduzca el radio: '));
let PI = Math.PI;
let areaCirculo = PI * radio * radio;
let circunferencia = 2 * PI * radio;
alert(`El área del círculo es ${areaCirculo} y el perímetro es ${circunferencia}`)
console.log(`El área del círculo es ${areaCirculo} y el perímetro es ${circunferencia}`);
// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
let interseccionX = 1;
let interseccionY = 2;
let pendienteM = interseccionY / interseccionX;
console.log(pendienteM);
// 6. La pendiente es m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
let puntoX1 = 2;
let puntoX2 = 6;
let puntoY1 = 2;
let puntoY2 = 10;
let pendiente = (puntoY2 - puntoY1) / (puntoX2 - puntoX1);
// 7. Compare la pendiente de las dos preguntas anteriores.
console.log(pendienteM === pendiente); // true
// 8. Calcula el valor de y (y = x<sup>2</sup> + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
console.log('x = -3 para que y = 0');
// 9. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
let horas = parseInt(prompt('Introduzca las horas: '));
let tarifa = parseInt(prompt('Introduzca la tarifa: '));
let gananciaSemanal = horas * tarifa;
alert(`La ganancia esta semana es de ${gananciaSemanal}€`);
console.log(`La ganancia esta semana es de ${gananciaSemanal}€`);

//    ```sh
//    Ingrese horas: 40
//    Introduce la tarifa por hora: 28
//    Su ganancia semanal es 1120
//    ```

// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
let nombreUsuario = prompt('Introduzca su nombre: ');
    nombreUsuario.length > 7 ? alert(`Tu nombre, ${nombreUsuario} es largo`)
                             : alert(`Tu nombre, ${nombreUsuario} es corto`);
// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let firstName2 = "Asabeneh";
let lastName2 = 'Yetayeh';
console.log(firstName2.length > lastName2.length ? `Tu primer nombre, ${firstName2}, es más largo que tu apellido ${lastName2}` : `Tu nombre ${firstName2}, no es más largo que tu apellido ${lastName2}`);

//    ```js
//    let firstName = "Asabeneh";
//    let lastName = "Yetayeh";
//    ```

//    ```sh
//    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
//    ```

// 12. Declare dos variables _myAge_ y _yourAge_ y asignarles los valores iniciales y myAge y yourAge.
let _myAge_ = 250;
let _yourAge_ = 25;

//    ```js
//    let myAge = 250;
//    let yourAge = 25;
//    ```
console.log(`Soy ${(_myAge_ - _yourAge_)} años mayor que tú`);
//    ```sh
//    Soy 225 años mayor que tú.
//    ```

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
let yearBirthday = parseInt(prompt('Dime tu año de nacimiento: '));
let actualAge = 2023 - yearBirthday;
actualAge >= 18 ? alert(`Tienes ${actualAge}, puedes conducir`)
                          : alert(`Tienes ${actualAge}, no puedes conducir hasta dentro de ${18 - actualAge}`);
//    ```sh

//    Introduzca el año de nacimiento: 1995
//    Tienes 25 años. Tienes la edad suficiente para conducir.

//    Introduzca el año de nacimiento: 2005
//    Tienes 15 años. Podrás conducir después de 3 años.
//    ```

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
let numOfYears = parseInt(prompt('Introduce el número de años: '));
let numOfDays = numOfYears * 365 + (numOfYears / 4);
let numOfHours = numOfDays * 24;
let secondsOfYear = numOfHours * 60 * 60;
alert(`Viviste ${secondsOfYear} segundos.`); // En el mío suma algo más de cantidad porque le sumé los años bisiestos

//    ```sh
//    Ingrese el número de años de vida: 100
//     Viviste 3153600000 segundos.
//    ```


// 15. Cree un formato de hora legible por humanos usando el objeto Date.
const newDate = new Date()
let actualYear = newDate.getFullYear().toString();
let actualMonth = (newDate.getMonth() + 1).toString();
let lengthActualMonth = actualMonth.length;
let actualDay = newDate.getDate().toString();
let lengthActualDay = actualDay.length;
let actualHour = newDate.getHours().toString();
let lengthActualHour = actualHour.length;
let actualMinutes = newDate.getMinutes().toString();
let lengthActualMinutes = actualMinutes.length;
//    1. YYYY-MM-DD HH:mm
let firstFormat = actualYear + "-" + (lengthActualMonth == 2?(actualMonth):"0"+(actualMonth)) + "-" + (lengthActualDay == 2?(actualDay):"0"+(actualDay)) + " " + (lengthActualHour == 2? actualHour:"0"+actualHour) + ":" + (parseInt(lengthActualMinutes)==2?parseInt(actualMinutes):"0"+ parseInt(actualMinutes));
console.log(firstFormat);
//    2. DD-MM-YYYY HH:mm
let secondFormat = (lengthActualDay == 2?(actualDay):"0"+(actualDay)) + "-" + (lengthActualMonth == 2?(actualMonth):"0"+(actualMonth)) + "-" + actualYear + " " + (lengthActualHour == 2? actualHour:"0"+actualHour) + ":" + (parseInt(lengthActualMinutes)==2?parseInt(actualMinutes):"0"+ parseInt(actualMinutes));
console.log(secondFormat);
//    3. DD/MM/YYYY HH:mm
let thirdFormat = (lengthActualDay == 2?(actualDay):"0"+(actualDay)) + "/" + (lengthActualMonth == 2?(actualMonth):"0"+(actualMonth)) + "/" + actualYear + " " + (lengthActualHour == 2? actualHour:"0"+actualHour) + ":" + (parseInt(lengthActualMinutes)==2?parseInt(actualMinutes):"0"+ parseInt(actualMinutes));
console.log(thirdFormat);

// ### Ejercicios: Nivel 3

// 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
//    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let legHour = actualYear + "-" + (lengthActualMonth == 2?(actualMonth):"0"+(actualMonth)) + "-" + (lengthActualDay == 2?(actualDay):"0"+(actualDay)) + " " + (lengthActualHour == 2? actualHour:"0"+actualHour) + ":" + (parseInt(lengthActualMinutes)==2?parseInt(actualMinutes):"0"+ parseInt(actualMinutes));
console.log(legHour);