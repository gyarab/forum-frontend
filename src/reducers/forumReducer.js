
const initialState = {
    storage:[]

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ALL_FORUMS':
            return {
                storage: action.payload
            };
        case 'FETCH_ALL_FORUMS':
            return{
                ...state,
                storage: action.payload
            };
        default:
            return state
    }

}