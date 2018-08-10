import React from 'react'
import ReactDOM from 'react-dom'

export default class CommentAction extends React.Component{

    constructor(){
        super();
        this.state = {
            upVoteCounter : 0,
            message: "",
            replyMessage: ""
        }

        console.log("in component constructor")
        this.commentUpVote = this.commentUpVote.bind(this)
        this.giveReply = this.giveReply.bind(this)
        this.commentDownVote = this.commentDownVote.bind(this)
        this.replyComment = this.replyComment.bind(this)
    }
   commentUpVote(){
       this.setState({upVoteCounter :this.state.upVoteCounter+1})
      
   }
   commentDownVote(){
    this.setState({upVoteCounter :this.state.upVoteCounter-1})
   }

   replyComment(){
       if(this.state.upVoteCounter !== 0){
       this.setState({message : this.state.replyMessage +" votes: " + this.state.upVoteCounter})
     ReactDOM.findDOMNode(this.refs.inputField).focus()
       this.setState({replyMessage : ""})
       }
       else{
        this.setState({message : "Please vote !!!"})
       }
   }

   componentWillMount(){
       console.log("component will mount now")
   }

   componentDidMount(){
       console.log("component is rendered in browser")
   }

   componentWillUpdate(){
       console.log("component is about to update")
   }
   componentDidUpdate(){
       console.log("component just got updated")
   }

   componentWillReceiveProps(){

   }

   componentWillUnmount(){

   }

   giveReply(e){
       console.log(e.target.value)
       this.setState({replyMessage : e.target.value})
   }
    render(){
        return(
            <div>
                <button onClick={this.commentUpVote}>upvote</button>
                <button onClick={this.commentDownVote}>downvote</button><br/>
                <input type="text" onChange={this.giveReply} ref="inputField" value={this.state.replyMessage}></input>
                <button onClick={this.replyComment}>reply</button>
                 
                <h5>up votes : {this.state.upVoteCounter}</h5>
                <h5>{this.state.message}</h5>
            </div>
        )
    }
}