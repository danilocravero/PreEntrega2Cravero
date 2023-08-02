// Función del Cotizador de Seguros
function cotizarSeguros() {
    let marca = document.querySelector("#marca").value;
    let edad = document.querySelector("#edad").value;
    let cobertura = document.querySelector('input[name="cobertura"]:checked').value;

    const cotizacion = { marca, edad, cobertura };
    const resultado = cotizar(cotizacion);

    // Imprime el resultado del costo del seguro
    document.getElementById("resultadoCotizacion").innerHTML = "El presupuesto del costo trimestral del seguro seleccionado es: $" + resultado;
}

// Cálculo de Cotización desde un costo base y sus opciones
function cotizar(cotizacion) {
    const { marca, edad, cobertura } = cotizacion;
    let resultado = 10000;

    const diferenciaEdad = diferencia(edad);
    resultado -= ((diferenciaEdad * 0.5) * resultado) / 100;

    resultado = calcularMarca(marca) * resultado;
    const incrementoCobertura = obtenerCobertura(cobertura);
    resultado = parseFloat(incrementoCobertura * resultado).toFixed(2);
    return resultado;
}

// Cálculo Cobertura Contra Terceros o Todo Riesgo por defecto
function obtenerCobertura(cobertura) {
    return (cobertura === 'contraTerceros') ? 1.40 : 1.80;
}

// Incremento según marca del auto
function calcularMarca(marca) {
    let incremento;
    switch (marca) {
        case 'ford': incremento = 1.40; break;
        case 'chevrolet': incremento = 1.30; break;
        case 'dodge': incremento = 1.20; break;
        case 'torino': incremento = 1.10; break;
    }
    return incremento;
}

// Cálculo de diferencia según año - dice edad porque me salía en consola alerta amarilla de la palabra año
function diferencia(edad) {
    return new Date().getFullYear() - edad;
}
