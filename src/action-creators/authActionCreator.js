//POST ACTIONS
//Attempts a logIn with the credentials entered by the user, admin creds are commented down below.
import {url} from "./url";

export const logIn = (creds) => dispatch => {
    let formData = new FormData();
    //admin@example.com
    formData.append('username', creds.email);
    //admin!
    formData.append('password', creds.password);

    fetch(url+"/api/core/login", {
        body: formData,
        mode: 'cors',
        method: "post"
    }).then(response => {
        if (response.status === 200) {
            localStorage.setItem('logged', true);
            localStorage.setItem('auth', response.headers.get('Lemon-Authorization'));
            dispatch({
                type: 'LOG_IN',
                payload: response.status
            })
        }
    }).catch(e =>
        dispatch({
            type: 'LOG_IN',
            payload: e.toString(),
        })
    )
};
//Attempts to register a new User with the creds provided.
export const register = (creds) => dispatch => {
    fetch(url+"/api/core/users", {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds),
        method: "post"
    }).then(response => {
        response.json()
    }).then(res => {
       dispatch(logIn(creds))
    }).catch(error => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });
};