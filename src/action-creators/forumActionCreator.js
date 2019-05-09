//FETCH ACTIONS
//Fetches all forums containing the String passed to this function
import {url} from "./url";

export const searchForumByName = (name) => dispatch => {
    fetch(url+'/forum/search/' + name)
        .then(response => response.json())
        .then(item => dispatch({
            type: 'SEARCH_FORUM_BY_NAME',
            payload: item
        }));
};
//Fetches all current ForumNames to be showed in teh Navigation component.
// Returns a single object containing only their names and ids to save bandwidth
export const fetchAllForumNames = () => dispatch => {
    return fetch(url+'/forum/all').then(response => response.json())
        .then(forumMap => dispatch({
            type: 'FETCH_ALL_FORUM_NAMES',
            payload: forumMap,
        }))
};

export const createForum = (forum) => dispatch => {
    fetch(url+'/forum/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': localStorage.getItem('auth')
        },
        body: JSON.stringify(forum)
    }).then(res=>res.json()).then(res=>
        dispatch({
        type:'CREATED_FORUM',
        payload: res
    })
    )
};
