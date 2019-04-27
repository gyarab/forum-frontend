//FETCH ACTIONS
//Fetch a page of posts from a specific forum
export const fetchComments = (postId, postPage) => dispatch => {
    fetch('http://localhost:7373/comments/' + postId + '/post?page=' + postPage + '&size=1')
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

