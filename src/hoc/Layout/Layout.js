import React, {Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../AuxComponent/AuxComponent';
import Toolbar from '../../components/Header/Toolbar/Toolbar'
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        );
    }
}

export default Layout;