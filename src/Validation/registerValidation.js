import isEmpty from './is-empty';
import validator from 'validator';

export default function (data) {
    //all the errors put here after checking
    let errors = {};


    //this checks all the data coming from register.js file is empty or not
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.c_password = !isEmpty(data.c_password) ? data.c_password : '';


    if (!validator.isLength(data.firstName, { min: 3, max: 20 })) {
        errors.firstName = 'First Name must be  between 3 and 20 characters';
    }
    if (!validator.isLength(data.lastName, { min: 3, max: 20 })) {
        errors.lastName = 'Last Name must be  between 3 and 20 characters';
    }

    if (validator.isEmpty(data.firstName)) {
        errors.firstName = 'First Name field is required';
    }
    if (validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last Name field is required';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email  is Invalid';
    }

    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password  must be  at least 6 characters';
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!validator.equals(data.password, data.c_password)) {
        errors.c_password = 'Password must match';
    }
    if (validator.isEmpty(data.c_password)) {
        errors.c_password = 'Confirm Password field is required';
    }
    return {
        errors,
        //if it is true it means errors doesnt occurs
        isValid: isEmpty(errors)
    }

}