
$(init());

function init(){
    const http = new HTTP();
    console.log('INIT');
    getUsers().then((users)=>{

    });

    function getUsers(){
     return http
        .get(ENVORINMENT.USER.getUsers)
        .then((r)=>{
            Promise.resolve()
        })
    }
    function renderUsers(users){
        
    }

}

