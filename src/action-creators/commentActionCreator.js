//FETCH ACTIONS
//Fetch a page of posts from a specific forum
import {url} from "./url";

export const fetchComments = (postId, postPage) => dispatch => {
    fetch(url+'/comments/' + postId + '/post?page=' + 0 + '&size=10', {
        headers: {
            'Authorization': localStorage.getItem('auth')
        },
    })
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

export const createComment = (comment, postId) => dispatch => {
    fetch(url+'/comments/create/' + postId, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        },
        body: JSON.stringify(comment)
    }).then(res => console.log(res))
};

//PUT ACTIONS
//Like/Dislike a comment.
export const updateComment = (attitude, commentId) => dispatch => {
    fetch(url+'/comments/update/' + attitude + '/' + commentId, {
        method: 'PUT',
        headers: {
            'Authorization': localStorage.getItem('auth')
        },
    }).then(res => res.json()).then(res => {
        dispatch({
            type: 'COMMENT_UPDATE',
            payload: res
        })
    })
};
