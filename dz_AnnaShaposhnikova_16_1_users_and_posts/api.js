//Ссылка на инструкцию по джейсон плейсхолдеру. https://jsonplaceholder.typicode.com/guide/

//Там нас будет интересовать все но главное - фильтрация при помощи квери стринга

// Получаем всех пользователей https://jsonplaceholder.typicode.com/posts
//Выводим имя пользователя на UI (колонка слева)и рядом с ним кнопку Show posts
// При нажатии на кнопку, делаем запрос на этот ендпоинт https://jsonplaceholder.typicode.com/posts?userId="ID"
//Получаем все посты пользователя и выводим их на UI(блок располагаем справа от пользователей) Выводим тайтл и бади

const userContainer = document.querySelector("#usersContainer");
const postContainer = document.querySelector("#postsContainer");

const ENVORINMENT = {
  Users: {
    getUsers: "/users/",
  },
  Posts: {
    getPosts: "/posts/",
  },
};

class HTTPService {
  static API = "https://jsonplaceholder.typicode.com";
  get(url, data = null) {
    if (!data) {
      return axios.get(`${HTTPService.API}${url}`);
    } else {
      return axios.get(`${HTTPService.API}${url}?${data}`);
    }
  }
}

const httpService = new HTTPService();

httpService
  .get(ENVORINMENT.Users.getUsers)
  .then((response) => {
    // console.log(response);
    response.data.forEach((user) => {
      renderUser(user);
    });
  })
  .catch((e) => {
    console.log(e);
    let div = document.createElement("div");
    div.textContent =
      "Can not get users. Please, check your internet connection and try again";
    userContainer.append(div);
  });

userContainer.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  if (!e.target.classList.contains("btn")) {
    return;
  }
  postContainer.textContent = "";
  const currentUserEl = e.target.previousSibling;

  console.log(currentUserEl.dataset.id);
  const userId = currentUserEl.dataset.id;
  httpService
    .get(ENVORINMENT.Posts.getPosts, `userId=${userId}`)
    .then((resp) => {
      // console.log(resp.data)
      resp.data.forEach((post) => {
        //console.log(post)
        renderPost(post);
      });
    })
    .catch((e) => {
      let div = document.createElement("div");
      div.textContent =
        "Can not get user  posts. Please, check your internet connection and try again";
      userContainer.append(div);
    });
  // httpService.get( `https://jsonplaceholder.typicode.com/posts?userId="ID"`)
}

function renderUser(user) {
  let divUser = document.createElement("div");
  let divName = document.createElement("div");
  let btn = document.createElement("button");

  divUser.classList.add("user");
  divName.classList.add("div-name");
  divName.dataset.id = user.id;
  divName.textContent = user.name;
  divUser.append(divName);

  btn.classList.add("btn");
  btn.textContent = "Show posts";
  divUser.append(btn);
  userContainer.append(divUser);
}

function renderPost(post) {
  let divPost = document.createElement("div");
  let divTitle = document.createElement("div");
  let divBody = document.createElement("div");
  // divTitle.textContent = '';
  // divPost.textContent = '';

  divPost.classList.add("post");
  divTitle.classList.add("div-title");
  divTitle.textContent = post.title;
  divBody.classList.add("div-body");
  divBody.textContent = post.body;
  divPost.append(divTitle);
  divPost.append(divBody);
  postContainer.append(divPost);
}
