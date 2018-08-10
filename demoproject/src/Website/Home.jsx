import React from 'react'
import axios from 'axios';

export default class Home extends React.Component{
    
    constructor(){
        super()
        this.state = {
            name : '',
            age : 0,
            salary : 2000
        }
    }

    captureName(eventObject){
        console.log(eventObject.target.value)
        this.setState({name : eventObject.target.value})
    }

    captureAge(eventObject){
        console.log(eventObject.target.value)
        this.setState({age : eventObject.target.value})
    }
    captureSalary(eventObject){
        console.log(eventObject.target.value)
        this.setState({salary : eventObject.target.value})
    }
    
    captureData(eventObject){
        eventObject.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8090/employee", this.state).then((response)=>{
            console.log("Post success!")
        })
    }
    render(){
        return(
            <div>
                <h2>Home</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <div className="userForm">
      <form onSubmit={this.captureData.bind(this)}>
                Name: <input type="text" value={this.state.name} onChange={this.captureName.bind(this)}></input> <br/>
                Age : <input type="number" value={this.state.age} onChange={this.captureAge.bind(this)}/><br/>
                Salary : <input type="number" value={this.state.salary} onChange={this.captureSalary.bind(this)}/><br/>
                <button type="submit">Add Friend</button>
</form>
            </div>
            </div>

        )
    }
}