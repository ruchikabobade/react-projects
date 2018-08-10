import React from 'react';

export default class Rainbow extends React.Component{
    render(){
        const rainbowStyle ={
            color: this.props.fcolor,
            backgroundColor : this.props.bcolor,
            float : 'left',
            padding : 5
        };
        return(
            <div>
                <h5 style={rainbowStyle}>{this.props.children}</h5>
            </div>

        )
    }
}