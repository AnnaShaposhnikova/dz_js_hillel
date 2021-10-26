const btnEl = document.querySelector('#btn');
const listEl = document.querySelector('#list');


const ENVORINMENT = {
    USER:{
       getUser: `/users/`,    
    },  
}

class HttpService{
    static API = 'https://api.github.com';
   
    get(url){        
        return axios.get(`${HttpService.API}${url}`);
    };
}

const httpService = new HttpService();

btnEl.addEventListener('click',onClick);

function onClick(){
    listEl.textContent = '';
    const loginEl = document.querySelector('#username');
    const loginValue = loginEl.value.trim();
    console.log(loginValue)
    if(!loginValue){
        return;
    }

// fetch(` https://api.github.com/users/${loginValue}`).then((res)=>{
//     res.text().then((data)=>{console.log(data)})
// })
//     axios.get(`https://api.github.com/users/${loginValue}`).then(res => showUser(res)).catch(() => showError());
 
// }
httpService.get(`${ENVORINMENT.USER.getUser}${loginValue}`).then(res => showUser(res)).catch(()=>showError());
 
}

function showError(){
    listEl.innerHTML = `<li>User is not found</li>`
}

function showUser(user){    
    let img = document.createElement('img');
    img.src = user.data.avatar_url;    
    listEl.append(img);    
    let li = document.createElement('li');
    li.textContent = `Repositories: ${user.data.public_repos}`;
    listEl.append(li);
    li = document.createElement('li');
    li.textContent = `Folowers: ${user.data.followers}`;
    listEl.append(li);
    li = document.createElement('li');
    li.textContent = `Following: ${user.data.following}`;
    listEl.append(li);
    
}

