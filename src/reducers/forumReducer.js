const initialState = {
    status: false,
    storage: [],
    posts: [],
    arrayOfForums: [],
    post: "",
    logged: false,

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
            return {
                ...state,
                status: action.payload,
            };
        case 'RESET':
            return {
                ...state,
                posts: []
            };
        case 'POST_BY_ID':
            let a = {};
            state.posts.forEach(e => {
                if (parseInt(e.content[0].id) === parseInt(action.payload)) {
                    a = {
                        ...state,
                        post: e.content[0]
                    };
                }
            });
            return a;
        case 'FETCHED_POST_BY_ID':
            return {
                ...state,
                post: action.payload
            };
        default:
            return state
    }

}