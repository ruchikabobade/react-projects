import React from 'react'
import axios from 'axios'

import DisplayUser from './DisplayUser'


export default class Friends extends React.Component{
   

    constructor(){
        super()
        this.state = {
            remoteUsers: []
        }

        this.getRemoteUsers = this.getRemoteUsers.bind(this)
    }
    componentDidMount(){
        console.log("axios call")
        this.getRemoteUsers()
    }

    getRemoteUsers(){
        axios.get("http://localhost:8080/001CrudKotlin-0.0.1-SNAPSHOT/employee/getAll").then((response) =>{
            console.log("success")
            console.log(response)
            this.setState({remoteUsers: response.data})
        })

      
    }

    render(){

        const allUsers = 
        this.state.remoteUsers.map((user)=>(
            <DisplayUser
            key={'user-' + user.id}
            myId = {user.id}
            myName = {user.name}
            myAge = {user.age}
            mySalary = {user.salary}
            ></DisplayUser>
        ))

        return(
            <div>
                <h2>Friends</h2>
               {allUsers}
            </div>
        )
    }
}