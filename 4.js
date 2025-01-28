// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
const faturamentos = [
  {
    estado: "SP",
    fat: 67836.43,
  },
  {
    estado: "RJ",
    fat: 36678.66,
  },
  {
    estado: "MG",
    fat: 29229.88,
  },
  {
    estado: "ES",
    fat: 27165.48,
  },
  {
    estado: "Outros",
    fat: 19849.53,
  },
];

let faturamentoTotal = 0;

for (let faturamento of faturamentos) {
  faturamentoTotal += faturamento.fat;
}

for (let i = 0; i < faturamentos.length; i++) {
  const faturamento = faturamentos[i];
  faturamento.constribuicaoPercentual = (
    (faturamento.fat / faturamentoTotal) *
    100
  ).toFixed(2);
}

console.log(faturamentos);
