import isEmpty from './is-empty';
import validator from 'validator';

export default function (data) {
    //all the errors put here after checking
    let errors = {};


    //this checks all the data coming from register.js file is empty or not
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';


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

    return {
        errors,
        //if it is true it means errors doesnt occurs
        isValid: isEmpty(errors)
    }

}