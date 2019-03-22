const initialState = {
    logged: false,
    storage: [],
    posts: [],
    arrayOfForums: [],

};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_FORUM_BY_NAME':
            return {
                ...state,
                arrayOfForums: action.payload
            };
        case 'FETCH_ALL_FORUM_NAMES':
            return {
                ...state,
                storage: action.payload
            };
        case 'FETCH_FORUMS':

            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'LOG_IN':
            console.log("reducer logIn:" + action.payload);
            return {
                ...state,
                logged: action.payload,
            };
        case 'RESET':
            return{
                ...state,
                posts:[]
            };
        default:
            return state
    }

}