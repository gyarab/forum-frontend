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
export const fetchPosts = () => dispatch => {
    fetch('http://localhost:7373/forum/0/posts?page=0&size=2')
        .then(response => response.json())
        .then(forums =>
            dispatch({
                type: 'FETCH_FORUMS',
                payload: forums.content
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
    formData.append("username", "admin@example.com");
    formData.append("password", "admin!");
    fetch("http://localhost:7373/api/core/login", {
        method: 'POST',
        body: formData,
        redirect: "follow",
        credentials: "include"
    }).then(response => response.json()).then(response =>
        dispatch({
            type: 'LOG_IN',
            payload: response
        })
    ).catch(e => console.log(e))
};