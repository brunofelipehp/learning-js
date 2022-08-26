//Nullish Coalescing Operator

//const idade = null

//document.body.innerText = `Sua idade é: ${idade ?? 'Não informado'}`

// Objetos

/* 
const user = {
  name: 'bruno',
  idade: 28,
  address: {
    street: 'Rua test',
    number: 135,
  }
}
// Desestruturação
const {address, idade: age} = user


// Rest operator

//const {name, idade,  ...rest} = user;
//document.body.innerText = JSON.stringify(rest);

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const [first, ,third, ...rest] = array
//document.body.innerText = JSON.stringify({first, second, rest})

//document.body.innerText = ('name' in user)
//document.body.innerText = Object.keys(user)
//document.body.innerText = Object.values(user)
//document.body.innerText = JSON.stringify(Object.values(user))
//document.body.innerText = JSON.stringify(Object.entries(user))
//document.body.innerText = JSON.stringify({address, age})

// Shirt syntax

const name = 'Bruno'
const age = 28

const user = {
  name,
  age,
}

document.body.innerText = JSON.stringify(user)

// Optional chaining
const user = {
  name: 'bruno',
  idade: 28,
  address: {
    street: 'Rua test',
    number: 135,
    zip: {
     code: '38757000',
      //city: 'São Paulo'
    },
    showFullAdress() {
      return 'OK'
    }

  }
}

//document.body.innerText = user.address?.zip?.code ?? 'Não informado'
document.body.innerText = user.address?.showFullAdress?.()



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

/* 
//Reduce
const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma);


//Promises

async function buscarUserGithub() {
  try {
    const response = await fetch('https://api.github.com/users/brunofelipehp')
    const body = await response.json()
    document.body.innerText = JSON.stringify(body.name);
  
  } catch (error) {
    console.error(error);
  }
 
 }

buscarUserGithub()


*/