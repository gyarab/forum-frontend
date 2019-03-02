import store from '../store.js'

export const createPost = () => dispatch => {

    fetch('http://localhost:7373/create/post', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify()
    }).then(res => res.json()).then(recipe => dispatch({
        type: 'ALL_FORUMS',
        payload: recipe
    }));
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
    fetch('http://localhost:7373/forum/' + forumId + '/posts?page=' + forumPage + '&size=1', {
        headers: {
            'Authorization': store.getState().forums.logged ?  store.getState().forums.logged : ''
        }
    })
        .then(response => response.json())
        .then(forums =>
            dispatch({
                type: 'FETCH_FORUMS',
                payload: forums
            })
        );
};
export const fetchAllForumNames = () => dispatch => {
    return fetch('http://localhost:7373/forum/all', {
        headers: {
            'Authorization': store.getState().forums.logged ?  store.getState().forums.logged : ''
        }
    }).then(response => response.json())
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
    }).then(response => dispatch({
            type: 'LOG_IN',
            payload: response.headers.get('Lemon-Authorization')
        })
    )
        .catch(e =>
            console.log(e)
        )
};