class TodoListView {
    static DELETE_CLASS = "delete";
    static ITEM_CLASS = "item"

  constructor(options) {
      this.options = options;
    this.$listContainer = this.initView()
        .on(
        "click",
         `.${TodoListView.DELETE_CLASS}`,
         (e)=>this.onDeleteClick(e))
         .on(
         "click",
         `.${TodoListView.ITEM_CLASS}`,
         (e)=>this.onToggleItem(e));
  }

  initView() {
    return $("<ul></ul>");
  }

  renderList(list) {
    const listHtml = list.map((item) => this.createItemHtml(item)).join("");
    // console.log(listHtml)
    this.$listContainer.html(listHtml);
  }
  createItemHtml(item) {
    // console.log(item);
    return `<li id=${item.id} class="${TodoListView.ITEM_CLASS} ${item.completed ? "done" : ""}" >
    ${item.title}
    <span id=${item.id} class=${TodoListView.DELETE_CLASS}>x</span>
    </li>`;
  }

  appendTo($container) {
    $container.append(this.$listContainer);
  }

  onDeleteClick(e){
      e.stopPropagation();
      this.options.onDelete(e.target.id);
  }

  onToggleItem(e){
      this.options.onToggle(e.target.id);     
  }

  removeElement(id){
      this.$listContainer.find(`#${id}`).remove();
  }

}
