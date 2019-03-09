export const getAllForums = () => dispatch => {
    dispatch({
        type: 'ALL_FORUMS',
        payload: 'This is working',
    })
};
export const fetchForumById = (id) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(response => response.json())
        .then(item => dispatch({
            type: 'FETCH_FORUM_BY_ID',
            payload: item
        }));
};
export const fetchPosts = (forumId, forumPage) => dispatch => {
    fetch('http://localhost:7373/forum/'  + forumId + '/posts?page=' + forumPage + '&size=1')
        .then(response => response.json())
        .then(forums =>
            dispatch({
                type: 'FETCH_FORUMS',
                payload: forums
            })
        );
};
export const fetchAllForumNames = () => dispatch => {
    fetch('http://localhost:7373/forum/all')
        .then(response => response.json())
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