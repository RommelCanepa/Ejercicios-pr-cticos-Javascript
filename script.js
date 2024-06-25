// Tarea 1: Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

function mostrarResultadoCadena() {
    const cadena = document.getElementById('inputCadena').value;
    const resultado = invertirCadena(cadena);
    document.getElementById('resultadoCadena').textContent = `Cadena invertida: ${resultado}`;
}

// Tarea 2: Número primo
function esNumeroPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function mostrarResultadoPrimo() {
    const numero = parseInt(document.getElementById('inputNumero').value);
    const resultado = esNumeroPrimo(numero);
    document.getElementById('resultadoNumero').textContent = resultado ? `${numero} es primo` : `${numero} no es primo`;
}

// Tarea 3: Eliminar duplicados en un arreglo
function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

function mostrarResultadoArreglo() {
    const input = document.getElementById('inputArreglo').value;
    const arreglo = input.split(',').map(Number);
    const resultado = eliminarDuplicados(arreglo);
    document.getElementById('resultadoArreglo').textContent = `Arreglo sin duplicados: ${resultado.join(', ')}`;
}

// Tarea 4: Factorial de un número
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    return numero * calcularFactorial(numero - 1);
}

function mostrarResultadoFactorial() {
    const numero = parseInt(document.getElementById('inputFactorial').value);
    const resultado = calcularFactorial(numero);
    document.getElementById('resultadoFactorial').textContent = `Factorial de ${numero}: ${resultado}`;
}

// Tarea 5: Recuento de vocales
function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    let conteo = 0;
    for (let char of cadena) {
        if (vocales.includes(char)) {
            conteo++;
        }
    }
    return conteo;
}

function mostrarResultadoVocales() {
    const cadena = document.getElementById('inputVocales').value;
    const resultado = contarVocales(cadena);
    document.getElementById('resultadoVocales').textContent = `Número de vocales: ${resultado}`;
}

// Tarea 6: Suma los números en un arreglo
function sumarNumeros(arreglo) {
    let suma = 0;
    for (let numero of arreglo) {
        suma += numero;
    }
    return suma;
}

function mostrarResultadoSuma() {
    const input = document.getElementById('inputSuma').value;
    const arreglo = input.split(',').map(Number);
    const resultado = sumarNumeros(arreglo);
    document.getElementById('resultadoSuma').textContent = `Suma total: ${resultado}`;
}

// Tarea 7: Encontrar el máximo en un arreglo
function encontrarMaximo(arreglo) {
    return Math.max(...arreglo);
}

function mostrarResultadoMaximo() {
    const input = document.getElementById('inputMaximo').value;
    const arreglo = input.split(',').map(Number);
    const resultado = encontrarMaximo(arreglo);
    document.getElementById('resultadoMaximo').textContent = `Número máximo: ${resultado}`;
}
