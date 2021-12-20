$(init());

function init() {
  const USER_CLASS = "user-item";
  const TODO_CLASS = "todo-item";
  const USER_CONTAINER$ = $(".users-container");
  const DONE$ = $(".done-container");
  const Add_todo$ = $("#todo-add-btn");
  const title$ = $("#title");
  
  const UNCOMPlETED$ = $(".not-done-container");
  
  USER_CONTAINER$.on("click", `.${USER_CLASS}`, onUserClick);

  Add_todo$.on("click", onTodoAdd);



  const httpService = new HTTPService();

  getUsers().then((users) => renderUsers(users));



  function getUsers() {
    return httpService
      .get(ENVORINMENT.Users.getUsers)
      .then((r) => Promise.resolve(r.data));
  }
  function renderUsers(users) {
    users.forEach((user) => {
      const el$ = createElement("div", user.name, USER_CLASS, user.id);
      // el$.appendTo(USER_CONTAINER);
      USER_CONTAINER$.append(el$);
    });
  }

  function createElement(tag, data, className = "", id = "") {
    return `<${tag} class=${className} id=${id}>${data}</${tag}>`;
  }

  function onUserClick(e) {
    DONE$.empty();
    UNCOMPlETED$.empty();
    const id = $(this).attr("id");
    httpService
    .get(ENVORINMENT.TODO.getTODOs, id)
    .then((r)=>console.log(r.data));
   
    getUserTodos(id)
   .then((todos)=>{
     todos.forEach((todo)=>{
       const el$ = createElement("div", todo.title, TODO_CLASS, id);
       todo.comleted ? DONE$.append(el$) : UNCOMPlETED$.append(el$);       
     })
   });
  }

  function getUserTodos(userId){
    return httpService
    .get(ENVORINMENT.TODO.getTODOs,userId)
    .then((r)=>Promise.resolve(r.data));
  }

  function onTodoAdd(){
    
    $('#dialog')
    .css({display:'block'})
    .dialog({
      dialogClass:'no-close',
      buttons: [
        {
          text: "Ok",
          
          click: function() {
            setTimeout(()=>{
            
              createTodo(title$.val());
            $(this).dialog( "close" );  
            },500);
            
          }     
        }
      ]
    });
  }

  function createTodo(todoText){
    const el$ = createElement("div", todoText, TODO_CLASS, Math.random());
    UNCOMPlETED$.append(el$);
  }
}


