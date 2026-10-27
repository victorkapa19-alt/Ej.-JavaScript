// ==========================================
// EJERCICIO 1: LOS 35 CAMELLOS
// ==========================================
function resolverCamellos() {
    let n = parseInt(document.getElementById('camellos').value);
    let p = parseInt(document.getElementById('prestado').value);
    let total = n + p;
    
    let h1 = Math.floor(total / 2);
    let h2 = Math.floor(total / 3);
    let h3 = Math.floor(total / 9);
    let sobrante = total - (h1 + h2 + h3);
    
    let textoSobrante = "";
    if (sobrante <= 1) {
        textoSobrante = `• Sobrante devuelto al calculista: ${sobrante} camello (el prestado)`;
    } else {
        let ganancia = sobrante - 1;
        textoSobrante = `• Sobrante devuelto al calculista: ${sobrante} camellos (1 del calculista y ${ganancia} de ganancia)`;
    }

    document.getElementById('resCamellos').innerHTML = 
        `Total temporal (con el préstamo): ${total} camellos<br>` +
        `• Hermano mayor (1/2): ${h1} camellos<br>` +
        `• Segundo hermano (1/3): ${h2} camellos<br>` +
        `• Tercer hermano (1/9): ${h3} camellos<br>` +
        textoSobrante;
}

// ==========================================
// EJERCICIO 2: LOS 60 MELONES
// ==========================================
function resolverMelones() {
    let m1 = parseInt(document.getElementById('m1').value);
    let m2 = parseInt(document.getElementById('m2').value);
    
    let esperado1 = m1 / 3;
    let esperado2 = m2 / 2;
    let totalEsperado = esperado1 + esperado2;
    
    let totalMelones = m1 + m2;
    let totalObtenido = (totalMelones / 5) * 2; 
    let diferencia = totalEsperado - totalObtenido;
    
    document.getElementById('resMelones').innerHTML = 
        `Ingreso ideal por separado: ${totalEsperado} dinares<br>` +
        `Ingreso por venta conjunta: ${totalObtenido} dinares<br>` +
        `Diferencia detectada: ${diferencia} dinar (explicada matemáticamente por la mezcla de los lotes)`;
}

// ==========================================
// EJERCICIO 3: ECUACIÓN CUADRÁTICA
// ==========================================
function quadroots(a, b, c) {
    let D = (b * b) - (4 * a * c);
    
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            mensaje: "La ecuación tiene dos raíces,",
            raices: "x1 = " + x1.toFixed(4) + " | x2 = " + x2.toFixed(4)
        };
    } else if (D === 0) {
        let x = -b / (2 * a);
        return {
            mensaje: "La ecuación tiene una raíz,",
            raices: "x = " + x.toFixed(4)
        };
    } else {
        return {
            mensaje: "La ecuación no tiene raíces reales.",
            raices: "Sin raíces reales"
        };
    }
}

function resolverEjercicio12() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let resultado = quadroots(a, b, c);

    document.getElementById("msg12").textContent = resultado.mensaje;
    document.getElementById("res12").textContent = resultado.raices;
}

function resolverIncisos12() {
    let eqA = quadroots(3, 6, 3);
    let eqB = quadroots(-3, 4, -6);
    let eqC = quadroots(-3, 7, 5);

    document.getElementById("incisos12").innerHTML = `
        <p><strong>(a) 3x² + 6x + 3 = 0:</strong> ${eqA.mensaje} ${eqA.raices}</p>
        <p><strong>(b) -3x² + 4x - 6 = 0:</strong> ${eqB.mensaje} ${eqB.raices}</p>
        <p><strong>(c) -3x² + 7x + 5 = 0:</strong> ${eqC.mensaje} ${eqC.raices}</p>
    `;
}

// ==========================================
// EJERCICIO 4 (EJERCICIO 13): APROXIMAR PI
// ==========================================
function resolverEjercicio13() {
    let N = parseInt(document.getElementById('inputN').value);
    if (isNaN(N) || N < 1) {
        alert("Por favor ingrese un número válido mayor o igual a 1.");
        return;
    }

    let suma = 0;
    for (let k = 1; k <= N; k++) {
        suma += 1 / (k * k);
    }

    let piAproximado = Math.sqrt(6 * suma);
    let piReal = Math.PI;
    let errorAbsoluto = Math.abs(piReal - piAproximado);

    document.getElementById('res13').innerHTML = `
        Número de términos (N) = ${N}<br>
        Suma parcial = ${suma}<br>
        Valor estimado de π = ${piAproximado}<br>
        Valor real (Math.PI) = ${piReal}<br>
        Diferencia/Error = ${errorAbsoluto.toExponential(4)}
    `;
}