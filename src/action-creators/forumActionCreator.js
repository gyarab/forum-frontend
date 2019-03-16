import store from '../store.js'

export const createPost = (post) => dispatch => {

    fetch('http://localhost:7373/forum/create/post', {
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
    fetch('http://localhost:7373/forum/' + forumId + '/posts?page=' + forumPage + '&size=1')
        .then(response => response.json())
        .then(forums =>
            dispatch({
                type: 'FETCH_FORUMS',
                payload: forums
            })
        );
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
        localStorage.setItem('auth', response.headers.get('Lemon-Authorization'));
        dispatch({
            type: 'LOG_IN',
            payload: response.headers.get('Lemon-Authorization')
        })
    })
        .catch(e =>
            console.log(e)
        )
};