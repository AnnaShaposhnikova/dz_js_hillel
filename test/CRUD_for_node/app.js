const user = {
    name:"July"
}

fetch("http://localhost:3001/users",{
    method:"POST",
    headers: {
        'Content-Type': 'application/json'
      },
    // headers:["application-json"],
    body:JSON.stringify(user)
})