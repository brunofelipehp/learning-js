export async function gitUser(){
  try{
    const url = 'https://api.github.com/users/brunofelipehp'
    const response =  await fetch(url)
    const userGit = await response.json()
    document.body.innerText = JSON.stringify(userGit.login)
  }catch(erro){
    console.error(error);
  }
 
}
