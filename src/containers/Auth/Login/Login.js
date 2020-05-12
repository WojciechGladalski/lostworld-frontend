import React, {Component} from 'react';
import classes from './Login.module.css';
import {connect} from "react-redux";
import Input from "../../../components/UI/Input/Input";
import Button from 'react-bootstrap/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index'

class Login extends Component {

    state = {
        loginForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Wprowadź nazwę użytkownika'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Wprowadź hasło'
                },
                value: '',
                validation: {
                    required: true,
                    isCorrect: false
                },
                valid: false,
                touched: false
            }
        }
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    };

    inputChangedHandler = (event, inputName) => {
        const updatedForm = {
            ...this.state.loginForm,
            [inputName]: {
                ...this.state.loginForm[inputName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.loginForm[inputName].validation),
                touched: true
            }
        };
        this.setState({loginForm: updatedForm});
    };

    loginHandler = (event) => {
        event.preventDefault();

        const loginData = {
            id: null,
            username: this.state.loginForm.username.value,
            email: null,
            password: this.state.loginForm.password.value,
            enabled: 0,
            roles: null
        };
        console.log(loginData);

        this.props.onLogin(loginData.username, loginData.password);
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        let form = formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            )
        );

        if (this.props.loading) {
            form = <Spinner/>
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        return (
            <div className={classes.Login}>
                {errorMessage}
                <form onSubmit={this.loginHandler}>
                    {form}
                    {/*<button onClick={this.loginHandler}>Zaloguj</button>*/}
                    <Button variant="success" onClick={this.loginHandler}>ZALOGUJ</Button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username, password) => dispatch(actions.login(username, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);