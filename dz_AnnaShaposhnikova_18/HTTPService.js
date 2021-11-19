class HTTPService {
    static API = "https://jsonplaceholder.typicode.com";
    get(url, data = "") {     
        return axios.get(`${HTTPService.API}${url}${data}`);      
    }
    post(url, data = null){
      return axios.post(`${HTTPService.API}${url}`,data);
    }
    put(url, data = null){
      return axios.put(`${HTTPService.API}${url}${data}`);
    }
    delete(url, data = null){
      return axios.delete(`${HTTPService.API}${url}${data}`);
    }
  }