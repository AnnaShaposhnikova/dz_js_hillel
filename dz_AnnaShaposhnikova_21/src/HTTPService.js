class HTTPService {
  static API = "https://jsonplaceholder.typicode.com";
  get(url, data = '') {   
      return axios.get(`${HTTPService.API}${url}${data}`);    
  }
}