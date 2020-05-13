import React, {useEffect, Suspense} from 'react';
import Layout from './components/UI/Layout/Layout'
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Register from './containers/Auth/Registration/Registration';
import Login from './containers/Auth/Login/Login';
import LostWorld from './components/LostWorld/LostWorld';
import Logout from './containers/Auth/Logout/Logout'
import './App.module.css';
import Profile from './components/Profile/Profile';
import Countries from './components/Countries/Countries'
import TestShow from './components/Test/TestShow';
import TestUpload from './components/Test/TestUpload';
import Spinner from './components/UI/Spinner/Spinner'
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
            <Route path="/countries" component={Countries}/>
            <Route path="/test" component={TestShow}/>
            <Route path="/testUpload" component={TestUpload}/>
            <Route path="/" exact component={LostWorld}/>
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                {/*<Route path="/login" component={Login}/>*/}
                <Route exact path="/logout" component={Logout}/>
                {/*<Route path="/register" component={Register}/>*/}
                <Route path="/myProfile" component={Profile}/>
                <Route path="/countries" component={Countries}/>
                <Route path="/test" component={TestShow}/>
                <Route path="/testUpload" component={TestUpload}/>
                <Route path="/" exact component={LostWorld}/>
            </Switch>
        )
    }

    return (
        <div>
            <Layout>
                {/*<Suspense fallback={<Spinner/>}>*/}
                {/*    {routes}*/}
                {/*</Suspense>*/}
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
