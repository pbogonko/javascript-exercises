

async function getuser(username){
  const token = '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'

  const url = `https://api.github.com/users/${username}`
  const params = {
    method: "GET",
    headers: {    authorization: `Bearer ${token}`
     }
  }

const response=fetch(url,params)
return (await response).json()

}
const input=document.querySelector("#search")
const btn=document.querySelector('button')
const name=document.querySelector('#name');
const email=document.querySelector('#email')
const created_at=document.querySelector('#created_at')


btn.onclick=function(){
  
  getuser(input.value).then(user=>{
     name.textContent=user.login
     email.textContent=`email:${user.email}`
     created_at.textContent=`created on:${user.created_at}`
  console.log(user)
})
}









