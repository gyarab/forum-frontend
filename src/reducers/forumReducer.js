const initialState = {
    logged: false,
    storage: [],
    posts:[],
    singleItem: {},

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_FORUM_BY_ID':
            return {
                ...state,
                singleItem: action.payload
            };
        case 'FETCH_ALL_FORUMS':
            return {
                ...state,
                storage: action.payload
            };
        case 'FETCH_FORUMS':
            return {
                ...state,
                posts: action.payload[0].posts
            };
        case 'LOG_IN':
            console.log("reducer logIn:" + action.payload);
            return{
                ...state,
                logged: action.payload,
            };
        default:
            return state
    }

}