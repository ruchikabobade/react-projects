import React from 'react';

export default class Square extends React.Component{
   
    giveAlert(){
        alert("you have selected a number!")
        this.props.onClick()
    }
    render(){
        const buttonStyle = {
            width: 15,
            height: 20
        }
        return (
            <button className="square" style={buttonStyle} onClick={this.giveAlert.bind(this)}>
            {this.props.value}
            </button>
        )
    }
}