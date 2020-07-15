function createComment (state = { comments: [] },  action){
    if(action.type === "ADD_COMMENT"){
        state= {...state, comments:[...state.comments, action.data] }
    }
    return state;
};

export default createComment;