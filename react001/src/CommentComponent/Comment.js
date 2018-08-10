import React from 'react';
import Auther from './Auther';
import CommentText from './CommentText';
import CommentAction from './CommentAction'


export default class Comment extends React.Component{
    render(){
        return(
            <div>
                <Auther />
                <CommentText />
                <CommentAction />
            </div>
        )
    }
}