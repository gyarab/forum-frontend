//FETCH ACTIONS
//Fetches all forums containing the String passed to this function
export const searchForumByName = (name) => dispatch => {
    fetch('http://localhost:7373/forum/search/' + name)
        .then(response => response.json())
        .then(item => dispatch({
            type: 'SEARCH_FORUM_BY_NAME',
            payload: item
        }));
};
//Fetches all current ForumNames to be showed in teh Navigation component.
// Returns a single object containing only their names and ids to save bandwidth
export const fetchAllForumNames = () => dispatch => {
    return fetch('http://localhost:7373/forum/all').then(response => response.json())
        .then(forumMap => dispatch({
            type: 'FETCH_ALL_FORUM_NAMES',
            payload: forumMap,
        }))
};
