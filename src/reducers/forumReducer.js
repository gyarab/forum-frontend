export default (state = {}, action) => {
    switch (action.type) {
        case 'ALL_FORUMS':
            return {
                storage: action.payload
            };
        case 'FETCH_ALL_FORUMS':
            return{
                storage: action.payload
            };
        default:
            return state
    }
};