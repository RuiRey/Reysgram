import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase';
import Header from './Header';

class EditProfile extends React.Component{
    render(){
        const {firebase} = this.props;
        const updateProfile = (e)=>{
            e.preventDefault();
            firebase.updateProfile({ username: this.refs.newUsername.value })
        }

        return(
            <React.Fragment>
            <Header/>
            <div className="container">
                <div className="forminmyweb">
                    <h3>Edit Your Profile</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="Username" className="col-sm-2 control-label">New Username</label>
                            <div className="col-sm-10">
                            <input type="text" ref="newUsername" className="form-control" id="Username" placeholder={this.props.profile.username}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={updateProfile}  type="submit" className="btn btn-danger btn-lg btn-block">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                
            </React.Fragment>
        );
    }
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
  )(EditProfile);