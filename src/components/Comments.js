import React from 'react';

import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

class Comments extends React.Component{

  renderDelectButton=(comment, userId )=>{
    if((this.props.auth.uid) && (this.props.auth.uid === this.props.post.authorUid || this.props.auth.uid === userId )){
      return(
        <button onClick={()=>this.props.firebase.remove(`/posts/${this.props.post.authorUid}/${this.props.postId}/comments/${comment}`)} className="remove-comment">&times;</button>
      );
    }
  }

  renderComment=(comment, i)=>{
    let {post} = this.props;
        return (
          <div className="comment" key={i}>
            <p>
              <strong>{post.comments[comment].user}</strong>
              {post.comments[comment].text}
              {this.renderDelectButton(comment, post.comments[comment].userId)}
            </p>
          </div>
        )
      };
    
  renderInputComment=()=>{
    if(this.props.auth.uid){
      return(
        <form ref="commentForm" className="form-horizontal" onSubmit={this.handleSubmit}>
        <div class="form-group">
          <div class="col-sm-10">
            <input type="text" ref="comment" class="form-control" placeholder="Add Comment" />
          </div>
        </div>
        <input type="submit" hidden />
      </form>
      );
    }
  }


handleSubmit= (e) => {
        e.preventDefault();
        let newComment ={
          text:this.refs.comment.value,
          user:this.props.profile.username,
          userId: this.props.auth.uid
        }
        this.props.firebase.set(`/posts/${this.props.post.authorUid}/${this.props.postId}/comments/${Date.now()}`, newComment);
        this.refs.comment.value="";
};
  
  render() {
    const { post } = this.props;
    const commentList = post.comments ? Object.keys(post.comments).map((comment, i)=>this.renderComment(comment, i)) : null;

    return (
      <div className="comments">
        {commentList}
        {this.renderInputComment()}

      </div>
    )
  }
};

export default compose(
  firebaseConnect(),
  connect((state) => ({
      auth: state.firebase.auth,
      profile: state.firebase.profile,
  }))
)(Comments)