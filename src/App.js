import React, {useEffect} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Register from './containers/Auth/Registration/Registration';
import Login from './containers/Auth/Login/Login';
import LostWorld from './containers/LostWorld/LostWorld';
import Logout from './containers/Auth/Logout/Logout'
import './App.module.css';
import Profile from './components/Profile/Profile';
import Form from './components/Test/test';
import * as actions from './store/actions/index';

const App = props => {

    const {onCheckStatus} = props;
    useEffect(() => {
        onCheckStatus();
    }, [onCheckStatus]);

    let routes = (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/myProfile" component={Profile}/>
            <Route path="/test" component={Form}/>
            <Route path="/" exact component={LostWorld}/>
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact path="/logout" component={Logout}/>
                <Route path="/register" component={Register}/>
                <Route path="/myProfile" component={Profile}/>
                <Route path="/test" component={Form}/>
                <Route path="/" exact component={LostWorld}/>
            </Switch>
        )
    }

    return (
        <div>
            <Layout>
                {routes}
            </Layout>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCheckStatus: () => dispatch(actions.authCheckState())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
