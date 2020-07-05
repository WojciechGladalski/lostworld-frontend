import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.touched && props.shouldValidate) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig}
                value={props.value}/>
    }

    let validationError = null;

    // if (props.invalid && props.touched && !props.isUsernameCorrect) {
    //     validationError = <p className={classes.ValidationError}>Wprowadź poprawną nazwę użytkownika</p>;
    // }

    // if (props.invalid && props.touched && !props.isEmailCorrect) {
    //     validationError = <p className={classes.ValidationError}>Wprowadź poprawny adres e-mail</p>;
    // }

    // if(props.invalid && props.touched && !props.isPasswordCorrect) {
    //     validationError = <p className={classes.ValidationError}>Hasło musi mieć co najmniej 6 znaków</p>;
    // }
    //
    // if (props.invalid && props.touched && !props.isPasswordsEqual) {
    //     validationError = <p className={classes.ValidationError}>Hasła nie sa identyczne</p>;
    // }

    if (props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>Wprowadź poprawne dane</p>
        if (props.invalid && props.touched && !props.isEmailCorrect) {
            validationError = <p className={classes.ValidationError}>Wprowadź poprawny adres e-mail</p>;
        }
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;