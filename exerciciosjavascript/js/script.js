// 1-Crie uma variável para armazenar seu nome completo
const nomeCompleto="Erika Ribeiro Vieira"
console.log(nomeCompleto)
//2- Crie uma variável para armazenar se você gosta de programar (true ou false)
 //Boolean verdadeiro e falso
const nãogosto= false;
const gosto= true;
console.log(gosto);


//3- Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável
//Operações Matemática

//2 + (3 x 4) - 5
const a= 2;
const b=3;
const c=4;
const d=5;
console.log(a + (b * c) - 5);
 
//2 x (3 + 4) - 5 ÷ 5
const e=2;
const f=3;
const g=4;
const h=5;
console.log(e * (f + g) - h / h);

//{[(10 - 4) / 2] * 3} + 1
const i=10;
const j=4;
const k=2;
const l=3;
const m=1;
console.log((((i-j)/k)*l)+m);



//3 * 4 / 2 + 1 - 5

const n=3;
const o=4;
const p=2;
const q=1;
const r=5;
console.log(n * o / p + q - r)

//4-Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
//O Segundo Sol
//Cássia Eller

const Sol = "astro-rei";
const cometa = "corpo celestial";
const telefone = "celular";
const casa = "familia";
const Sóis ="astros-reis";
const explicação="razao";


const poema = `Quando o segundo ${Sol} chegar
Para realinhar as órbitas dos planetas
Derrubando com assombro exemplar
O que os astrônomos diriam se tratar
De um outro ${cometa}

Não digo que não me surpreendi
Antes que eu visse, você disse, e eu não pude acreditar

Mas você pode ter certeza
De que seu ${telefone} irá tocar
Em sua nova ${casa} que abriga agora a trilha
Incluída nessa minha conversão

Eu só queria te contar
Que eu fui lá fora e vi dois ${Sóis} num dia
E a vida que ardia sem explicação

Quando o segundo ${Sol} chegar
Para realinhar as órbitas dos planetas
Derrubando com assombro exemplar
O que os astrônomos diriam se tratar
De um outro ${cometa}

Não digo que não me surpreendi
Antes que eu visse, você disse, e eu não pude acreditar

Mas você pode ter certeza
De que seu ${telefone} irá tocar
Em sua nova ${casa} que abriga agora a trilha
Incluída nessa minha conversão

Eu só queria te contar
Que eu fui lá fora e vi dois Sóis num dia
E a vida que ardia sem explicação

Seu telefone irá tocar
Em sua nova casa que abriga agora a trilha
Incluída nessa minha conversão

Eu só queria te contar
Que eu fui lá fora e vi dois ${Sóis} num dia
E a vida que ardia sem explicação

Explicação
Não tem ${explicação}
Explicação, não
Não tem ${explicação}
Explicação, não tem

Não tem ${explicação}
Explicação, não tem
Explicação, não tem, não tem`;

console.log(poema);



//5-Crie um programa que exiba a data atual formatada utilizando interpolação

const dataAtual = new Date();

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1; 
const ano = dataAtual.getFullYear();

const dataFormatada = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;
console.log(`A data atual é ${dataFormatada}`);



//6-Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação

const base = parseFloat(prompt("Digite a base do retângulo:"));
const altura = parseFloat(prompt("Digite a altura do retângulo:"));
const area = base * altura;

alert(`A área do retângulo com base ${base} e altura ${altura} é ${area}.`);



//7-Crie uma condicional para verificar se o caractere é uma vogal

function verificarVogal(caractere) {
caractere = caractere.toLowerCase();
    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        console.log(`${caractere} é uma vogal.`);
    } else {
        console.log(`${caractere} não é uma vogal.`);
    }
}
verificarVogal('a'); 
verificarVogal('E'); 
verificarVogal('b'); 
verificarVogal('x'); 
verificarVogal('I');



//8-Crie uma condicional para verificar se o número é par ou é impar
// Função para verificar se o número é par ou ímpar

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

verificarParImpar(4); 
verificarParImpar(7); 
verificarParImpar(0); 
verificarParImpar(-3);


//9-Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:

function tipoTriangulo(lado1, lado2, lado3) {
    
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ||
        (lado1 + lado2 <= lado3) || (lado1 + lado3 <= lado2) || (lado2 + lado3 <= lado1)) {
        console.log("Os valores fornecidos não formam um triângulo válido.");
    } else if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
}


tipoTriangulo(5, 5, 5); // equilátero.
tipoTriangulo(5, 5, 3); //isósceles.
tipoTriangulo(5, 4, 3); // escaleno.
tipoTriangulo(1, 2, 3); // inválido



//10-Calcule a média do aluno e verifique se ele foi aprovado
// Função para calcular a média e verificar aprovação

function verificarAprovacao(nota1, nota2, nota3, nota4) {
   
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const notaMinima = 6.0;

    // Verifica se a média é suficiente para aprovação
    if (media >= notaMinima) {
        console.log(`A média do aluno é ${media.toFixed(2)}. O aluno foi aprovado.`);
    } else {
        console.log(`A média do aluno é ${media.toFixed(2)}. O aluno foi reprovado.`);
    }
}

verificarAprovacao(7.5, 6.0, 8.0,7.5); 
verificarAprovacao(5.5, 5.0, 6.0,5.5); 
verificarAprovacao(9.0, 10.0, 8.5,10.0); 

//11- Crie uma variável para armazenar um array com seus hobbies

const hobbies = ['ler', 'brincar com meu filho', 'fazer crochê', 'assistir série'];

console.log(hobbies);


/* 12-Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.*/

// Cria um array chamado frutas com 5 frutas diferentes
const frutas = ['morango', 'melão', 'uva', 'laranja', 'abacaxi'];

// Acessa e imprime o segundo elemento do array
console.log(`O segundo elemento do array é: ${frutas[1]}`);

// Adiciona mais duas frutas ao final do array
frutas.push('banana', 'abacate');

// Imprime o array atualizado
console.log('Array atualizado:', frutas);

// Remove a primeira fruta do array
frutas.shift();

// Imprime o array após remover a primeira fruta
console.log('Array após remover a primeira fruta:', frutas);


/* 13-Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.*/


const minhaVariavel = 'Erika'; 
const tipoDaVariavel = typeof minhaVariavel;
console.log(`O tipo da variável é: ${tipoDaVariavel}`);


/*14- Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */


const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operador = prompt("Digite o operador (+, -, *, /):");
let resultado;


switch (operador) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        
        if (numero2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            resultado = null;
        } else {
            resultado = numero1 / numero2;
        }
        break;
    default:
        console.log("Operador inválido. Por favor, insira +, -, * ou /.");
        resultado = null;
        break;
}


if (resultado !== null) {
    console.log(`O resultado de ${numero1} ${operador} ${numero2} é ${resultado}.`);
}

