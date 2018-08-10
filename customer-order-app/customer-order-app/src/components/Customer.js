import React from 'react';
import CreateCustomer from "./CreateCustomer";
import {HashRouter, NavLink, Route} from 'react-router-dom'
import DisplayCustomer from './DisplayCustomer';




export default class Customer extends React.Component{
    render(){

        const{customers, showCustomers, onDeleteClick} =this.props

        const rows = []
        


        // this.props.customers.forEach((customer) =>{
        //     rows.push(
        //         <DisplayCustomer customer={customer}/>
        //     )
        // });

        customers.forEach((customer) => {
          
            rows.push(
              <DisplayCustomer
                customer={customer}
                key={customer.name}
              />
            );
           
          });

        return(
            <HashRouter>
                <div>
            <div>
                <h3>Customer Details</h3>
                <table border="1px solid black">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>Age</th>
                        <th>Post Code</th>
                    </tr>
                    </thead>
                    <tbody>

                        {rows}
                    {/* <tr>
                        <td>1</td>
                        <td>xyz</td>
                        <td>pqr</td>
                        <td>abc</td>
                        <td>23</td>
                        <td>123456</td>
                        <td>
                           <NavLink to = "/update"> <button>Update</button> </NavLink>
                           <NavLink to = "/delete"> <button>Delete</button> </NavLink>
                           <NavLink to ="/order"> <button>Add Order</button> </NavLink>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
                <br/>
                
                <NavLink to="/add"><button>Add Customer</button></NavLink>
            </div>
            <div>
                <Route path="/update" ></Route>
                <Route path="/delete"></Route>
                <Route path="/order"></Route>
                <Route path="/add" component={CreateCustomer}></Route>
            </div>
            </div>
            </HashRouter>
        )
    }

}