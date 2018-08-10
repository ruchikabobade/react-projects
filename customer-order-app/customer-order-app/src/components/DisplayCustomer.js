import React from 'react'

export default class DisplayCustomer extends React.Component{
    render(){
        const cust = this.props.customer;
        return(
            <tr>
                <td>{cust.id}</td>
                <td>{cust.name}</td>
                <td>{cust.addressLine1}</td>
                <td>{cust.addressLine2}</td>
                <td>{cust.age}</td>
                <td>{cust.postCode}</td>
            </tr>
        )
    }
}