function createPost (state = { posts: [] },  action){
        if(action.type === "ADD_POST"){
            state= {...state, posts:[...state.posts, action.data] }
        }
        return state;
    };
   
export default createPost;