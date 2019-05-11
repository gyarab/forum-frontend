const initialState = {
    status: false,
    storage: [],
    posts: [],
    arrayOfForums: [],
    post: {post: {}, attitudeDto: {}},
    logged: false,
    updatedPost: {post: {}, attitudeDto: {}},
    updatedComment: {comment: {}, attitudeDto: {}},
    comments: "",
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
        case 'FETCH_POSTS':
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
            let a;
            state.posts.forEach(e => {
                if (parseInt(e.content[0].post.id) === parseInt(action.payload)) {
                    a = e.content[0];
                }
                console.log("post_by_id")
            });
            return {...state, post: a};
        case 'FETCH_POST_BY_ID':
            return {
                ...state,
                post: action.payload
            };
        case 'POST_UPDATE':
            return {
                ...state,
                updatedPost: action.payload
            };
        case 'COMMENT_UPDATE':
            return {
                ...state,
                updatedComment: action.payload
            };
        case 'FETCH_COMMENTS':
            return {
                ...state,
                comments: action.payload
            };
        case 'CREATE_COMMENT':
            let arr = JSON.parse(JSON.stringify(state.comments));
            arr.content.push(action.payload);
            return {
                ...state,
                comments: arr,
            };
        case 'CREATE_FORUM':
            let map = JSON.parse(JSON.stringify(state.storage));
            map[Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]];
            return {
                ...state,
                storage: map
            };
        case 'CREATE_POST':
            return {
                ...state,
                posts: []
            };
        case 'DELETE_POST':
            return {
                ...state,
                posts: []
            };
        case 'DELETE_COMMENT':
            let commentArr = JSON.parse(JSON.stringify(state.comments));
            let cArr = commentArr.content.filter((element, index, array) => {
                return element.comment.id !== action.payload;
            });
            commentArr.content = cArr;
            return {...state, comments:commentArr};
        case 'A':
            let b = JSON.parse(JSON.stringify(state.post));
            b.likes = 9;
            return{...state, post: b};
        default:
            return state
    }

}