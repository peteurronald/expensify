import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';


export const LoginPage = ({startLogin}) => (
    <div>   
        {/* <input type="text" value={this.loginDetails.userName}  />
        <input type="text" value={this.loginDetails.password} /> */}
        <button onClick={startLogin}>Login</button>
    </div>  
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

