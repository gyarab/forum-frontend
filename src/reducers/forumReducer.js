const initialState = {
    error: false,
    storage: [],
    posts: [],
    arrayOfForums: [],
    post: ""

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
                error: action.payload,
            };
        case 'RESET':
            return{
                ...state,
                posts:[]
            };
        case 'POST_BY_ID':
            state.posts.forEach(e=>{
                if(parseInt(e.content[0].id) === parseInt(action.payload)){
                    console.log("returning the post")
                    return{
                        ...state,
                        post: e.content[0]
                    };
                }
            });
        default:
            console.log("returning default")
            return state
    }

}