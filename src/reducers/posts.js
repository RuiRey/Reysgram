// a reducer takes in two things:
// 1. the action(infomation about what happened)
// 2. a copy of current state(store)


//state=[] why? because, the first time that this function runs, state is not equal to anything, so we will set it to
// a empty array()
function posts(state=[], action){
    const i = action.index;
    switch(action.type){
        case 'INCREMENT_LIKES':
            return [
                ...state.slice(0,i),//before the one we are updating
                {...state[i], likes:state[i].likes + 1},
                ...state.slice(i+1)//after the one we are updating
            ]
        case "ADD_NEW_PHOTO":
            return [
                ...state,
                {
                    caption: action.caption,
                    code: action.id,
                    display_src: action.display_src,
                    id: action.id,
                    likes:0
                }
            ]
        case "DELETE_PHOTO":
            return [
                ...state.slice(0,action.i),//before the one we are updating
                ...state.slice(action.i+1)//after the one we are updating
            ]
        default:
            return state;
    }
}

export default posts;


//return a updated copy of state(store)