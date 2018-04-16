import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import Header from './Header';

class SignUp extends React.Component{
    render(){
        const signUp = (e)=>{
            e.preventDefault();
            const createNewUser = ({ email, password, username }) => {
                this.props.firebase.createUser(
                  { email, password },
                  { username, email }
                ).catch((err) => {
                    alert(err);
                    this.refs.email.value="";
                    this.refs.password.value="";
                    this.refs.userName.value="";
                });
              }
            createNewUser({
                email: this.refs.email.value,
                password: this.refs.password.value,
                username: this.refs.userName.value,
              })
            }
        const checkLogin = ()=>{
          if(this.props.auth.uid){
              this.props.history.push(`/home/${this.props.auth.uid}`);
          }
      }
      checkLogin();

        return(
            <React.Fragment>
                <Header/>
                <div className="container">
                <div className="forminmyweb">
                    <p><h3>Sign UP</h3> Set up your Username and Password</p> 
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="signupEmail" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                          <input type="email" ref="email" className="form-control" id="signupEmail" placeholder="Email" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="signupUserName" className="col-sm-2 control-label">Username</label>
                        <div className="col-sm-10">
                          <input type="text" ref="userName" className="form-control" id="signupUserName" placeholder="Name" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="signupPassword" className="col-sm-2 control-label">Password</label>
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

export default compose(
  firebaseConnect(),
  connect((state) => ({
      auth: state.firebase.auth,
      profile: state.firebase.profile,
  }))
)(SignUp);