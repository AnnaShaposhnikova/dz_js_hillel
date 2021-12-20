// const btnReadEl = document.querySelector('#btn');
// btnReadEl.addEventListener('click',onReadClick);
// const btnEditEl = document.querySelector('#btnEdit');
// btnEditEl.addEventListener('click', onEditClick);
// const POST = {
//     body: "Some body text",
//     id: 1,
//     title: "New Title",
//     userId: 1,
// }


// const ENVORINMENT = {
//     POST:{
//        getPosts: "/posts",
//     updatePosts: "/posts/", 
//     },
    
   
// }

// class HttpServece{
//     static API = 'https://jsonplaceholder.typicode.com';
//     optionsPut = {
//         method: 'PUT',
//         body: JSON.stringify(POST),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         }
//     };

//     get(url){        
//         return fetch(`${HttpServece.API}${url}`);
//     };

//     update(url, id, data){
//         this.optionsPut.body = JSON.stringify(data);
//         return fetch(`${HttpServece.API}${url}${id}`, this.optionsPut);
//     };
// }

// const httpService = new HttpServece();

// function onReadClick(){
//     // fetch('https://jsonplaceholder.typicode.com/posts/1').then(r =>{
//     //     r.json().then((data) => console.log(data));
//     // }
//     // )
//     axios.get('https://jsonplaceholder.typicode.com/posts').then(r =>{
//         console.log(r.data)
//     })
// //     httpService.get(ENVORINMENT.POST.getPosts).then(res => res.json().then(data => console.log('GET', data)));    
// }

// function onEditClick(){
//    httpService.update(ENVORINMENT.POST.updatePosts,POST.id, POST).then(res => res.json().then(data => console.log('GET', data)));
// }

const btnReadEl = document.querySelector('#btn');
btnReadEl.addEventListener('click',onReadClick);
const btnEditEl = document.querySelector('#btnEdit');
btnEditEl.addEventListener('click', onEditClick);
const listEl = document.querySelector('#list');
const POST = {
    body: "Some body text",
    id: 1,
    title: "New Title",
    userId: 1,
}


const ENVORINMENT = {
    POST:{
       getPosts: "/posts",
    updatePosts: "/posts/", 
    },
    
   
}

class HttpServece{
    static API = 'https://jsonplaceholder.typicode.com';
    options = {
        method: 'PUT',
        url: '',
        data:null,
    };

    get(url){        
        return axios.get(`${HttpServece.API}${url}`);
    };

    update(url, id, data){
       
        return axios.put(`${HttpServece.API}${url}${id}`, data);
    };
}

const httpService = new HttpServece();

function onReadClick(){
 
    axios.get('https://jsonplaceholder.typicode.com/posts').then(r =>{
        showPostTitle(r.data)
    })
//     httpService.get(ENVORINMENT.POST.getPosts).then(res => res.json().then(data => console.log('GET', data)));    
}

function onEditClick(){
   

   httpService.update(ENVORINMENT.POST.updatePosts,POST.id, POST).then(res =>  console.log('EDITED', res));
}

function showPostTitle(posts){
    console.log(posts.map((post) =>{
        `<li>${post.title}</li>`
    }).join())
    listEl.innerHTML = posts.map((post) =>{
        `<li>${post.title}</li>`
    }).join()
}

// ---------------------------------------------------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((dataJson) => dataJson.json())
// .then((posts) =>Promise.resolve(posts))
// .then((posts )=> getAuthor(posts[0].userId))
// .then((r) => console.log(r.data))
// .catch((error) =>console.log('ERROR HAPEEND',error))

// function getAuthor(id){
//     return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
// }