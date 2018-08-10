import axios from 'axios'

const demoValues = [
    {
        id : 0,
        name : 'your name',
        addressLine1 : 'your address',
        addressLine2 : 'your address',
        age : 0,
        postCode : 000000
     }
]

export default function CustomerReducer(state ={
    customers : demoValues
}, action){
    const customers = state.customers
    switch(action.type){
        case 'display':
        return{
           customers: axios.get("http://localhost:8080/001CrudKotlin-0.0.1-SNAPSHOT/employee/getAll").then((response) =>{
                console.log("success")
                console.log(response)
                this.setState({customers: response.data})
            })
        }
        default:
        return state
    }
}