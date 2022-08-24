// map

const array = [1, 2, 3, 4, 5];
//const novoArray =[];

/*
for (const item of array) {
  document.body.innerText += item;
}
*/

//array.forEach(item => {
 // novoArray.push(item * 2)
//});

// map
/*
const novoArray = array.map(item => {
  if(item % 2 === 0) { 
    return item * 10
   }

   return item;
})
*/

/* 

//filter
const novoArray = array
.filter(item => item % 2 !== 0)
.map(item => item * 10)

*/

/*
const todosItems = array.every(item => {
 return typeof item !== 'number'
})
*/

/*
const peloMenosUm = array.some( item => {
  return typeof item === 'number'
})
*/

//find
//const par = array.find(item => item % 2 === 0)
//const index = array.findIndex(item => item % 2 === 0)

const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma);
