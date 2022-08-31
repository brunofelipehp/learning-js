const carro = {
  nome: 'Honda city',
  cor: 'Preto',
  portas: 4,
  marca: 'Honda',
  placa: 'Mxr3435',
}

//const {nome, cor, marca, ...rest} = carro

//document.body.innerText = JSON.stringify({nome, cor, marca})
/*
function pegaCarro({nome, marca, cor}){
  console.log(nome);
  console.log(marca);
  console.log(cor);
}

pegaCarro(carro)
*/

const numbers = [1, 4, 8, 9]

const raiz = numbers.map(Math.sqrt)

let doubles = numbers.map(num => {
  return num * 2;
})
let par = numbers.filter(num => num % 2 === 0).map(item => item * 10)

const todosItems = numbers.every(num =>  num % 2 === 0)

const peloMenosUm = numbers.some(num => num % 2 === 0)

const founds = numbers.find(item => item === 4) ?? 'Não informado'

const foundIndex = numbers.findIndex(item => item % 2 === 0)

const soma = numbers.reduce((acc, item) => {

  if(item % 2  !== 0) {
     acc += item
  }

  return acc;

}, 0)

import {gitUser} from './promise.js'

gitUser()

//document.body.innerText = JSON.stringify()