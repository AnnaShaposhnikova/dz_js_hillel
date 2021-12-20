class TodoListModel{
    todoListItems = [];
    constructor(url){
        this.url = url;
        console.log(url);
        this.getListItems()

    }

    getListItems(){
        return fetch(this.url)
        .then((r)=>r.json(r))
        .then((r) =>this.setListData(r));
    }

    setListData(data){
        
        this.todoListItems = data; 
    }

    getTodoListItems(){
        return this.todoListItems;
    }

    deleteItem(id){
        return fetch(this.url + '/' + id, {method:"DELETE"})
        .then((r)=>{
            this.todoListItems = this.todoListItems.filter((i) => i.id != id)
            return Promise.resolve(id)
        }
        )                
    }

    toggleItem(id){
      
        const item = this.todoListItems.find((el) => el.id === +id);
       
        item.complited = !item.complited;
        this.todoListItems.map((e)=>{
            if(e.id=== id){
                return item;
            }
            return e;
        })

    }
// fetch(this.url + "/" + id, {
//             method:"PUT",
//             headers: {
//                 'Content-Type': 'application/json'
//               },            
//             body: item

//         })
//         .then((r)=>console.log(r))


}