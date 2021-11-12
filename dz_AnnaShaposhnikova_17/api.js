//Ссылка на инструкцию по джейсон плейсхолдеру. https://jsonplaceholder.typicode.com/guide/

//Там нас будет интересовать все но главное - фильтрация при помощи квери стринга

// Получаем всех пользователей https://jsonplaceholder.typicode.com/posts
//Выводим имя пользователя на UI (колонка слева)и рядом с ним кнопку Show posts
// При нажатии на кнопку, делаем запрос на этот ендпоинт https://jsonplaceholder.typicode.com/posts?userId="ID"
//Получаем все посты пользователя и выводим их на UI(блок располагаем справа от пользователей) Выводим тайтл и бади

const userContainer$ = $("#usersContainer");
const postContainer$ = $("#postsContainer");

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
    response.data.forEach((user) => {
      renderUser(user);
    });
  })
  .catch((e) => {
      let div$ = $(
      "<div>Can not get users. Please, check your internet connection and try again </div>"
    );
    userContainer$.append(div$);
  });

userContainer$.on("click",".btn", onBtnClick);

function onBtnClick(e) {
  const targetElement$ = $(e.target);
  postContainer$.empty();
  const userId = targetElement$.parent().attr("data-id");
  // console.log(userId)
  httpService
    .get(ENVORINMENT.Posts.getPosts, `userId=${userId}`)
    .then((resp) => {
      resp.data.forEach((post) => {
        renderPost(post);
      });
    })
    .catch((e) => {
      let div$ = $(
        "<div>Can not get user  posts. Please, check your internet connection and try again</div>"
      );
      userContainer$.append(div$);
    });
}

function renderUser(user) {
  let divUser$ = $("<div></div>").addClass("user").attr("data-id", user.id);

  let divName$ = $("<div></div>").addClass("div-name").text(user.name);
  let btn$ = $("<button>Show posts</button>").addClass("btn");

  divUser$.append(divName$);
  divUser$.append(btn$);
  userContainer$.append(divUser$);
}

function renderPost(post) {
  let divPost$ = $("<div></div>").addClass("post");
  let divTitle$ = $("<div></div>").addClass("div-title").text(post.title);
  let divBody$ = $("<div></div>").addClass("div-body").text(post.body);

  divPost$.append(divTitle$);
  divPost$.append(divBody$);
  postContainer$.append(divPost$);
}
