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
    fetch('http://localhost:7373/forum/search/' + name)
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
        ).catch(e => {
        dispatch({
            type: 'FETCH_FORUMS',
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
export const resetPosts = () => dispatch => {
    dispatch({
        type: 'RESET'
    })
};
export const getPostById = (id) => dispatch => {
    dispatch({
        type: 'POST_BY_ID',
        payload: id
    })
};
export const fetchPostById = (id) => dispatch => {
    fetch("http://localhost:7373/post/id/" + id).then(response => response.json()).then(e =>
        dispatch({
            type: 'FETCHED_POST_BY_ID',
            payload: e
        }));
};
