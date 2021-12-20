const URL = 'https://jsonplaceholder.typicode.com/todos';

class TodoListController{
    constructor($container){
        this.$container = $container;        
        this.todoListModel = new TodoListModel(URL);
        this.todoListView = new TodoListView({
            onDelete:(id)=>this.deleteItemModel(id),
            onToggle:(id)=>this.toggleItemModel(id)
        });
        this.todoListModel.getListItems().then(()=>{
            this.initViewRender();
            
        });
        
    }
    initViewRender(){
        this.todoListView.renderList(this.todoListModel.getTodoListItems());
        this.todoListView.appendTo(this.$container)
    }

    deleteItemModel(id){
        this.todoListView.removeElement(id);
        // this.todoListModel.deleteItem(id);
        // this.initViewRender();
        

    }

    toggleItemModel(id){       
        this.todoListModel.toggleItem(id).then(this.initViewRender())
    }
    
}