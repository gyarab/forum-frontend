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
    fetch('http://192.168.1.3:7373/forum/all').then(function(response) {
        if(response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not ok.');
    })
        .then(res => res.json())
        .then(forums => dispatch({
            type: 'FETCH_ALL_FORUMS',
            payload: forums
        }));

};