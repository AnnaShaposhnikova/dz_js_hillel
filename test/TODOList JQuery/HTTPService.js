class HTTPService {
    static API = "https://jsonplaceholder.typicode.com";
    get(url, data = '') {    
        return axios.get(`${HTTPService.API}${url}${data}`);     
    }
    post(url, data = null){
      return 
      fetch(`${HTTPService.API}${url},${data}`, {
  method: 'POST',
  body: JSON.stringify(data), headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

      
      
      // axios.get(`${HTTPService.API}${url},${data}`);
    }
  }