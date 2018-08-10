import connect from 'react-redux'
import CreateCustomer from '../components/CreateCustomer'
import * as actions from '../actions'


function mapStateToProps(state){
    return{
        customers = state.CustomerReducer.customers      
    }
}

function mapDispatchToProps(dispatch){
    return{
        showCustomers: dispatch(actions.displayCustomers())
    }
}

const VisibleCustomer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateCustomer);

export default VisibleCustomer;