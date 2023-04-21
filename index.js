let variableSinValor;

let booleano1 = true;
let booleano2 = false;

const PI = 3.14;

const TAU = 2 * PI;

const booleanoAnd = booleano1 && booleano2;

const booleanoNot = !booleano1;

const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
    contarHasta10_2++;
};

let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
    postI = postI + postJ++;
};

let sumaPares  = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares = sumaPares + i;
    }
}

let variableValorNumerico = 666;

const MiNombre = 'Víctor';

const MiNumeroFav = 33;

const booleanoOr = booleano1 || booleano2;

const booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico <= MiNumeroFav);

const seisNoEsNueve = 6 !== 9;

const booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < (MiNumeroFav * TAU);

const valorSuma = MiNumeroFav + variableValorNumerico;

const valorResta = MiNumeroFav - variableValorNumerico;

let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

const valorDivision = MiNumeroFav / 3;

let contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10 ++;
};

let preI = 0;
let preJ = 0;
for (let i = 0; i < 11; i++) {
    preI = preI + ++preJ;
};

let sumaImpares = 0;
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        sumaImpares = sumaImpares + i;
    }
};

console.log(postI);