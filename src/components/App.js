import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
    const Dashboard = ()=>'Dashboard';
    const Surveys_new = ()=>'New Survey';
class App extends React.Component{
    componentDidMount(){
        this.props.fetch_user();
    }
    render(){
        return(
            <div className="container">
                abc
                <BrowserRouter>
                <div>
                <Header/>
                <Route exact path ='/' component={Landing}/>
                <Route exact path ='/surveys' component={Dashboard}/>
                <Route path ='/surveys/new' component={Surveys_new}/>
                </div>
                </BrowserRouter>

            </div>
        );
    }
}
export default connect(null, actions)(App);
//App component call action creator which is responsible for making aoi req from express and ask whether or nor current user is logged in
//redux thunk to dispatch an action to all diffferent reducers. maintain asynchronus action creators behave the way as expected