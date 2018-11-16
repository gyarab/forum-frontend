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