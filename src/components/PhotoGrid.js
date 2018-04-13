import React from 'react';
import Header from './Header';
import Photo from './Photo';
//import AddNewPhoto from './AddNewPhoto';
//import SendToPhoto from './SendToPhoto';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const PhotoGrid = ({ history,auth, posts, firebase, match, profile }) =>{
    
    const postsList = !isLoaded(posts)
    ? 'Loading'
    : isEmpty(posts)
        ? 'Photo list is empty'
        : Object.keys(posts).map((uid)=>{
            return(Object.keys(posts[uid]).map((post)=>{
                return(
                    <div className="col-lg-4 col-sm-6">
                        <div className="thumbnail">
                            <Photo post={posts[uid][post]} postId={post} />
                        </div>
                    </div>
                );
            }))
        })
    
    
    return(
        <React.Fragment>
            <Header />
            
            <div className="container">
                <div className="row display-flex">
                    {postsList}
                </div>
             </div>
             
        </React.Fragment>
    )
}

export default compose(
    firebaseConnect((props)=>
        [
           {path: 'users/'},
           {path: 'users/'},
           {path: `posts/`},
       ]
    ),
    connect((state) => ({
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        posts: state.firebase.data.posts,
    }))
  )(PhotoGrid);