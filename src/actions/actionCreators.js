//increment
//this 'index' will tell us which post is going to add likes
export function increment(index) {
    return{
        type:"INCREMENT_LIKES",
        index:index
    }
}

//add comment
export function addComent(postId, author, comment){
    return{
        type:"ADD_COMMENT",
        postId: postId,
        author: author,
        comment: comment
    }
}

//remove comment
export function removeComment(postId, i){
    return{
        type:"REMOVE_COMMENT",
        postId,
        i
    }
}//same as the upper function, ES6 new design

export function addNewPhoto(postId,caption, url,){
    return{
        type: "ADD_NEW_PHOTO",
        code: postId,
        caption,
        display_src:url,
        id: postId,
    }
}

export function deletePhoto(i){
    return{
        type:"DELETE_PHOTO",
        i
    }
}
