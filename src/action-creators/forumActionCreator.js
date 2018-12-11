export const getAllForums = () => dispatch => {
    dispatch({
        type: 'ALL_FORUMS',
        payload: 'This is working',
    })
};
export const getForumsById = () => dispatch => {
    dispatch({
        type: 'FORUMS_BY_ID',
        payload: 'ID:1',
    })
};
export const fetchAllForums = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(forums => dispatch({
            type: 'FETCH_ALL_FORUMS',
            payload: forums
        }));

};