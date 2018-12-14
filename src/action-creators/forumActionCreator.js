export const getAllForums = () => dispatch => {
    dispatch({
        type: 'ALL_FORUMS',
        payload: 'This is working',
    })
};
export const fetchForumById = (id) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/'+id)
        .then(response => response.json())
        .then(item => dispatch({
            type: 'FETCH_FORUM_BY_ID',
            payload: item
        }));
};
export const fetchAllForums = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(forums => dispatch({
            type: 'FETCH_ALL_FORUMS',
            payload: forums
        }));

};