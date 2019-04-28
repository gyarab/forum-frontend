//FETCH ACTIONS
//Fetch a page of posts from a specific forum
export const fetchComments = (postId, postPage) => dispatch => {
    fetch('http://localhost:7373/comments/' + postId + '/post?page=' + postPage + '&size=2')
        .then(response => response.json())
        .then(comments =>
            dispatch({
                type: 'FETCH_COMMENTS',
                payload: comments
            })
        ).catch(e => {
        dispatch({
            type: 'FETCH_COMMENTS',
            payload: ""
        })
    });
};

export const createComment = (comment) => dispatch => {
    fetch('http://localhost:7373/comment/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        },
        body: JSON.stringify(comment)
    }).then(res => console.log(res))
};
