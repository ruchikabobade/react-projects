import React from 'react'

export default class CreateCustomer extends React.Component{
    render(){
        const {onSubmitClick} = this.props
        return(
            <div>
                <form onSubmit={onSubmitClick}>
                   Name: <input type="text" name="name"></input>
                   Address Line 1: <input type="text" name="addressLine1"></input>
                   Address Line 2: <input type="text" name="addressLine2"></input>
                   Age: <input type="number" name="age"></input>
                   Post Code: <input type="number" name="postCode"></input>
                   <button type="submit"></button>
                </form>
            </div>
        )
    }
}