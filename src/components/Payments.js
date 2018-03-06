import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';
class Payments extends React.Component{
    render(){
        debugger;
        return(
            <StripeCheckout
            name="Emaily"
            description="5$ for 5 credits"
            amount={500}// by default currency is cents- 5 us dollars
            token={token=>{
                console.log(token);
                this.props.handle_token(token);
            }}//callback function called after we have successfully retreived authorization token
            // directly from stripe
            //token comes as object with many details. we can use id to uniquely identify
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            {/* Rather than using buitin button use own button */}
            <button className="btn">Add credits</button>
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(Payments);