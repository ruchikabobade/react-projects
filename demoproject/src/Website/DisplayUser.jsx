import React from 'react'

export default class DisplayUser extends React.Component{
    render(){
        return(
            <div>{this.props.myId}  {this.props.myName} {this.props.myAge} {this.props.mySalary}</div>
        )
    }
}