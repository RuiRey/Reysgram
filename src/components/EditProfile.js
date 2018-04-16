import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase';
import Header from './Header';

class EditProfile extends React.Component{
    
    render(){
        const {firebase, auth, profile}=this.props;

        const handleChange = (e)=>{
             firebase.updateProfile({
                 [e.currentTarget.name] : e.currentTarget.value,
             });
        }
        
        return(
            <React.Fragment>
            <Header/>
            <div className="container">
                <div class="jumbotron">
                    <h3>Email: {profile.email}</h3>
                    <h3>Username: {profile.username}</h3>
                    {!!profile.phoneNumber && (
                        <h3>Phone Number: {profile.phoneNumber}</h3>
                    )}
                    {!!profile.gender && (
                        <h3>Gender: {profile.gender}</h3>
                    )}
                    <p><a class="btn btn-danger btn-lg gohomebtn" href={`/home/${auth.uid}`} role="button">Go Back to Your Home Page</a></p>
                </div>
                <hr/>
                <div className="forminmyweb">
                    <h3>Edit Your Profile</h3>
                    <form className="form-horizontal">

                        <div className="form-group">
                            <label htmlFor="Username" className="col-sm-2 control-label">New Username</label>
                            <div className="col-sm-10">
                            <input onChange={handleChange} placeholder={profile.username} type="text" name="username" className="form-control" id="Username" />
                            </div>
                        </div>

                        <div className="form-group"> 
                            <label htmlFor="phoneNumber" className="col-sm-2 control-label">Phone Number</label>
                            <div className="col-sm-10">
                            <input onChange={handleChange} placeholder={profile.phoneNumber || ''} type="number" name="phoneNumber" className="form-control" id="phoneNumber" />
                            </div>
                        </div>

                        <div className="form-group">
                        <label htmlFor="gender" className="col-sm-2 control-label">Gender</label>
                        <div className="col-sm-10">
                          <select onChange={handleChange} placeholder={profile.gender || ''} name="gender" className="form-control" id="gender">
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Secret</option>
                          </select>
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
           //{path: `posts/`},
       ]
       
    ),
    connect((state) => ({
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        //posts: state.firebase.data.posts,
    }))
  )(EditProfile);