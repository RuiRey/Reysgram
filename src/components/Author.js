import React from 'react';
import Header from './Header';
import Photo from './Photo';
import AddNewPhoto from './AddNewPhoto';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const Author = ({ firebase, posts, auth, profile, history, match }) =>{
    const photoList = !isLoaded(posts)
    ? 'Loading'
    :isEmpty(posts)
        ? 'Photo list is empty, Add New Photo please.'
        : isEmpty(posts[match.params.userId])
            ? 'Photo list is empty, Add New Photo please.'
            : Object.keys(posts[match.params.userId]).map((post, index)=>{
            return(
                <div className="col-lg-4 col-sm-6">
                    <div className="thumbnail">
                        <Photo key={index} post={posts[match.params.userId][post]} postId={post} />
                    </div>
                </div>
            );
        }
    )

    const renderAddNewPhoto=()=>{
        if(auth.uid && auth.uid === match.params.userId){
            return(
                <AddNewPhoto auth={auth} profile={profile} />
            );
        }
    }
    
    return(
        <React.Fragment>
        <Header/>
        <div className="container">
            {renderAddNewPhoto()}
            <div className="row">
                {photoList}
            </div>
        </div>
    </React.Fragment>
    );
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
  )(Author);
  