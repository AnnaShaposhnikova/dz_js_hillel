import $ from "jquery";

export default class LayoutView {
  constructor(options) {
    this.options = options;
  }

  renderLayout($contrainer) {
    const $layout = this.createLayout();
    $contrainer.append($layout);
    this.initListners();
  }
  createLayout() {
    return $(
      `
    <div class="layout-container">
    <div class="header">
      <a id="user-link" href ="#">User</a>
      <a id="chat-link" href ="#">Chat</a>    
    
    Header</div>
    <div id="main-container">Body</div>
    <div class="footer">Footer</div>
    </div>
    `
    );
  }
  initListners(){
    $("#user-link").on("click",this.onUserClick);    
    $("#chat-link").on("click",this.onChatClick);
  }

  onUserClick = (e)=>{
    e.preventDefault()
   this.options.user();
  }

  
  onChatClick = (e)=>{
    e.preventDefault();
    this.options.chat()

  }

}
