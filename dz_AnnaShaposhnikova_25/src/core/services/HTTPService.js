export default class HTTPService {
    static API = "https://quiet-chamber-08369.herokuapp.com";

    get(url, data = "") {
        return fetch(`${HTTPService.API}${url}${data}`)
            .then((response) => response.json())
            .then((resp) => resp.users);
    }

    post(url, data = null) {
        return fetch(`${HTTPService.API}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json());
    }
    //
    // .then((response) => console.log(response));

    put(url, data = null) {
        return fetch(`${HTTPService.API}${url}${data.id}`, data);
    }

    delete(url, data = null) {
        return fetch(`${HTTPService.API}${url}${data}`);
    }

    login(url, data = null){
              return fetch(`${HTTPService.API}${url}${data.id}`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
              })
              .then((response) => response.json())
              .then((r) => console.log("token", r))
    }

    
}
