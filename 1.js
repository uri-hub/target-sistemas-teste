// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
const indice = 13;
let k = 0;
let soma = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(`O valor da soma é ${soma}`);
