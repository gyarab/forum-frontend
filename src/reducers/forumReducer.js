
const initialState = {
    storage:[],
    singleItem:{},

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_FORUM_BY_ID':
            return {
                ...state,
                singleItem: action.payload
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