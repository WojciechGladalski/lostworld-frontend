import React, {useState} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom';
import Register from './containers/Auth/Registration/Registration';
import Login from './containers/Auth/Login/Login';
import LostWorld from './containers/LostWorld/LostWorld';
import Logout from './containers/Auth/Logout/Logout'
import './App.module.css';
import Profile from './components/Profile/Profile'

const App = props => {

    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // const userStatusHandler = () => {
    //     const token = localStorage.getItem('token');
    //     if (token !== null) {
    //         setIsAuthenticated(true);
    //     }
    // };
    //
    // let routes = (
    //     <Switch>
    //         <Route path="/login" component={Login}/>
    //         <Route path="/register" component={Register}/>
    //         <Route path="/" exact component={LostWorld}/>
    //     </Switch>
    // );
    
    // if (isAuthenticated) {
    //     routes = (
    //         <Switch>
    //             <Route path="/login" component={Login}/>
    //             <Route exact path="/logout" component={Logout}/>
    //             <Route path="/register" component={Register}/>
    //             <Route path="/myProfile" component={Profile}/>
    //             <Route path="/" exact component={LostWorld}/>
    //         </Switch>
    //     )
    // }

    return (
        <Layout>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact path="/logout" component={Logout}/>
                <Route path="/register" component={Register}/>
                <Route path="/myProfile" component={Profile}/>
                <Route path="/" exact component={LostWorld}/>
            </Switch>
            {/*{routes}*/}
        </Layout>
    );
  };

export default App;
