import React, {Component} from 'react';
import classes from './Registration.module.css';
import {connect} from "react-redux";
import Input from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions/index'
import Button from "react-bootstrap/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

class Registration extends Component {

    state = {
        registrationForm: {
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
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Wprowadź adres E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
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
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Powtórz hasło'
                },
                value: '',
                validation: {
                    required: true,
                    isPasswordEqual: false,
                },
                valid: false,
                touched: false
            }
        },
        loading: false
    };

    // componentDidMount() {
    //
    // }

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

        if (rules.isPasswordEqual) {
            isValid = value === this.state.registrationForm.password.value && isValid;
        }

        return isValid;
    };

    // isEmailCorrect = (value, rules) => {
    //     let isValid = true;
    //
    //     if (rules.isEmail) {
    //         const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    //         isValid = pattern.test(value) && isValid;
    //     }
    //     return isValid;
    // }

    inputChangedHandler = (event, inputName) => {
        const updatedForm = {
            ...this.state.registrationForm,
            [inputName]: {
                ...this.state.registrationForm[inputName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.registrationForm[inputName].validation),
                touched: true
            },
        };
        this.setState({registrationForm: updatedForm});
    };

    submitHandler = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        });

        console.log(this.state.registrationForm.username.value);
        console.log(this.state.registrationForm.email.value);
        console.log(this.state.registrationForm.password.value);

        const registerData = {
            id: null,
            username: this.state.registrationForm.username.value,
            email: this.state.registrationForm.email.value,
            password: this.state.registrationForm.password.value,
            enabled: 0,
            roles: null
        };
        console.log(registerData);

        // const password = this.state.registrationForm.password.value;
        // const confirmPassword = this.state.registrationForm.confirmPassword.value;
        //
        // if (password !== confirmPassword) {
        //
        // }

        this.props.onRegister(registerData);
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.registrationForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registrationForm[key]
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
            <div className={classes.Registration}>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    {/*<button onClick={this.submitHandler}>Zarejestruj</button>*/}
                    <Button variant="success" onClick={this.submitHandler}>ZAREJESTRUJ</Button>
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
        onRegister: (registerData) => dispatch(actions.register(registerData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);