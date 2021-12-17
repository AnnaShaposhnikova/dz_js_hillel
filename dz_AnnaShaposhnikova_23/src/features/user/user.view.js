import $ from "jquery";

export default class UserView {
    constructor(options) {
        this.options = options;
    }

    ERROR_MSG = "Field is requared";

    renderUserForm($contrainer) {
        console.log("user", $contrainer);
        const $form = this.createUserForm();
        const $body = $contrainer.find("#main-container");
        $body.append($form);
        this.initListners();
    }

    createUserForm() {
        return $(`
  
  <div id="create-user">
   <h2>Create user</h2>
  <form action="#" method="post">
    <label for="name">User name</label>
    <input id="name" type="text"name="user_name" plaseholder="Enter user name">
    <div class = "error"></div> 
   <button id="btn-create-user" type="submit">Save</button>   

  </form>
 
  </div>

  `);
    }

    initListners() {
        $("form").on("submit", this.onSubmitClick);
    }

    onSubmitClick = (e) => {
        // console.log(e.target)
        e.preventDefault();

        const $inputName = $("input");
        //  console.log($inputName);
        const $userName = $inputName.val();
        if (!$userName) {
            const $error = $(".error").text(this.ERROR_MSG);
            return;
        }
        $(".error").empty();
        this.options.getUser($userName);
        $inputName.val("");
    };
}
