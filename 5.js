// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU

const caracteres = "etsetonrassapuov";

const caracteresInvertidos = (texto) => {
  let arrayCaracteresInvertidos = [];
  for (let i = texto.length - 1; i >= 0; i--) {
    const caracter = texto[i];

    arrayCaracteresInvertidos.push(caracter);
  }

  return arrayCaracteresInvertidos.join("").trim();
};

console.log(caracteresInvertidos("etsetonrassapuov"));

console.log(caracteresInvertidos(caracteres));
