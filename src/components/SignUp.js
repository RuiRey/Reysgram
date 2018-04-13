import React from 'react';
import { firebaseConnect } from 'react-redux-firebase'
//import './signUp.css';
import Header from './Header';
class SignUp extends React.Component{
    render(){
        const signUp = (e)=>{
            //e.preventDefault();
            const createNewUser = ({ email, password, username }) => {
                this.props.firebase.createUser(
                  { email, password },
                  { username, email }
                ).catch((err) => {
                    alert(err);
                    this.props.history.push(`/signup`);
                });
              }
            createNewUser({
                email: this.refs.email.value,
                password: this.refs.password.value,
                username: this.refs.userName.value,
              })
            }

        const onSubmit = (e)=>{
            e.preventDefault();
            this.props.history.push(`/`);
        }

        return(
            <React.Fragment>
                <Header/>
                <div className="container">
                <div className="signuploginform">
                    <p><h3>Sign UP</h3> Set up your Username and Password</p> 
                    <form onSubmit={onSubmit} className="form-horizontal">
                      <div className="form-group">
                        <label for="signupEmail" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                          <input type="email" ref="email" className="form-control" id="signupEmail" placeholder="Email" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="signupUserName" className="col-sm-2 control-label">Username</label>
                        <div className="col-sm-10">
                          <input type="text" ref="userName" className="form-control" id="signupUserName" placeholder="Name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="signupPassword" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                          <input type="password" ref="password" className="form-control" id="signupPassword" placeholder="Password" />
                        </div>
                      </div>
                        
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button onClick={signUp} type="submit" className="btn btn-danger btn-lg btn-block">Sign in</button>
                        </div>
                      </div>
                    </form>
                </div>
                </div>
                
            </React.Fragment>
        );
    }
}



export default firebaseConnect()(SignUp);