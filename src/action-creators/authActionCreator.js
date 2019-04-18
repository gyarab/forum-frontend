export const logIn = (creds) => dispatch => {
    console.log("called");
    let formData = new FormData();
    //admin@example.com
    formData.append('username', creds.email);
    //admin!
    formData.append('password', creds.password);

    fetch("http://localhost:7373/api/core/login", {
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
export const register = (creds) => dispatch => {
    fetch("http://localhost:7373/api/core/users", {
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