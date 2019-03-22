export const createPost = (post) => dispatch => {
    fetch('http://localhost:7373/post/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        },
        body: JSON.stringify(post)
    }).then(res => console.log(res))
};
export const searchForumByName = (name) => dispatch => {
    fetch('http://localhost:7373/forum/search/'+name)
        .then(response => response.json())
        .then(item => dispatch({
            type: 'SEARCH_FORUM_BY_NAME',
            payload: item
        }));
};
export const fetchPosts = (forumId, forumPage) => dispatch => {
    fetch('http://localhost:7373/post/forum/' + forumId + '/posts?page=' + forumPage + '&size=1')
        .then(response => response.json())
        .then(forums =>
            dispatch({
                type: 'FETCH_FORUMS',
                payload: forums
            })
        ).catch(e =>{
        dispatch({
            type:'FETCH_FORUMS',
            payload: ""
        })
    });
};
export const fetchAllForumNames = () => dispatch => {
    return fetch('http://localhost:7373/forum/all').then(response => response.json())
        .then(forumMap => dispatch({
            type: 'FETCH_ALL_FORUM_NAMES',
            payload: forumMap,
        }))


};
export const logIn = (creds) => dispatch => {
    let formData = new FormData();
    //admin@example.com
    formData.append('username', creds.username);
    //admin!
    formData.append('password', creds.password);

    fetch("http://localhost:7373/api/core/login", {
        body: formData,
        mode: 'cors',
        method: "post"
    }).then(response => {
        if(response.status===200){
            localStorage.setItem('logged', true);
            localStorage.setItem('auth', response.headers.get('Lemon-Authorization'));
        }
    })
        .catch(e =>
            dispatch({
                type:'LOG_IN',
                payload: e.toString(),
            })
        )
};
export const resetPosts = () => dispatch => {
    dispatch({
        type: 'RESET'
    })
};