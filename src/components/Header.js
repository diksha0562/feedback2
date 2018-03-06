import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';
class Header extends React.Component {
    renderComponent(){
        console.log('props are',this.props);
        switch (this.props.auth){
            case null:
             return ;
            case false: 
            return <li><a href="/auth/google">Sign in with google</a></li>;
        default: return [<li key='1'><Payments/></li>,
        <li key = '3' style={{margin: '0 10px'}}// 0-top bottom, 10 left-right
        >Credits: {this.props.auth.credits}</li>,
        <li key='2'><a href="/api/logout">Signout</a></li>];
            //to logout we have to unset the cookie
            //ajax req is much faster then http bcoz browser will not refresh
            //browser is not changing html components 
            //we r making ajax req and when we get response just tell redux to update itself 
        }
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link 
                        to={this.props.auth?'/surveys':'/'} 
                        className="brand-logo"
                        >Emaily</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {/* <li><a>sign in with google</a></li> */}
                            {console.log('props')}
                        {this.renderComponent()}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
// function mapStatetoProps(state) {
//     return {auth:state.auth} 
// };
function mapStatetoProps({ auth }) { // from indx-reducer
    return { auth };
}
export default connect(mapStatetoProps, null)(Header);
