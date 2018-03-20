import _ from 'lodash';
import registerFields, { confirmRegisterFields } from '../components/register/registerFormFields';
import loginFormFields from '../components/login/loginFormFields';
import compareFormFields from '../components/compare/compareFormFields';
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


export const validateRegistration = (values) => {
    const errors = {};
    if (_.isEmpty(values)) return;
    const email = values.email;
    if (email && emailRegex.test(email) === false) errors['email'] = "Please enter a valid email";

    const password = values.password;
    if (password && passRegex.test(password) === false) errors['password'] = "Please enter a valid password";


    const confirmpass = values.confirmpass;
    if (password && confirmpass && confirmpass != password) errors['confirmpass'] = "Please re-enter the above password.";


    _.each(registerFields, ({ name }) => {
        if (!values[name]) errors[name] = 'You must enter a ' + name;
    });
    return errors;
}

export const validateConfirmation = (values) => {
    const errors = {};
    if (_.isEmpty(values)) return;

    _.each(confirmRegisterFields, ({ name }) => {
        if (!values[name]) errors[name] = 'You must enter a ' + name;
    });
    return errors;
}

export const validateLogin = (values) => {
    const errors = {};
    if (_.isEmpty(values)) return;

    _.each(loginFormFields, ({ name }) => {
        if (!values[name]) errors[name] = 'You must enter a ' + name;
    });
    return errors;
};


export const validateCompare = (values) => {
    const errors = {};
    if (_.isEmpty(values)) return;

    _.each(compareFormFields, ({ name }) => {
        if (!values[name]) errors[name] = 'You must enter a ' + name;
    });
    return errors;
};