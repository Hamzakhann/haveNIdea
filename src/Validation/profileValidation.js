import isEmpty from './is-empty';
import validator from 'validator';

export default function (data) {
    //all the errors put here after checking
    let errors = {};


    //this checks all the data coming from register.js file is empty or not
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.city = !isEmpty(data.city) ? data.city : '';
    data.country = !isEmpty(data.country) ? data.country : '';
    data.role = !isEmpty(data.role) ? data.role : '';
    data.experience = !isEmpty(data.experience) ? data.experience : '';
    data.gender = !isEmpty(data.gender) ? data.gender : '';
    data.twitter = !isEmpty(data.twitter) ? data.twitter : '';
    data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';
    data.about = !isEmpty(data.about) ? data.about : '';
    data.profileImage = !isEmpty(data.profileImage) ? data.profileImage : '';
    data.coverImage = !isEmpty(data.coverImage) ? data.coverImage : '';
    



    if (validator.isEmpty(data.city)) {
        errors.city = 'City is required';
    }
    
    if (validator.isEmpty(data.country)) {
        errors.country = 'country is required';
    }
    
    if (validator.isEmpty(data.role)) {
        errors.role = 'role is required';
    }
    
    if (validator.isEmpty(data.experience)) {
        errors.experience = 'experience is required';
    }
    if (validator.isEmpty(data.gender)) {
        errors.gender = 'gender is required';
    }
    if (validator.isEmpty(data.twitter)) {
        errors.twitter = 'twitter is required';
    }
    if (validator.isEmpty(data.linkedin)) {
        errors.linkedin = 'linkedin is required';
    }
    if(data.role === 'softwareEngineer'){
        if (data.skills.length === 0) {
            errors.skills = 'skills is required';
        }
    }
    if (validator.isEmpty(data.about)) {
        errors.about = 'about is required';
    }
    if (!data.profileImage) {
        errors.profileImage = 'Profile Image is required';
    }
    if (!data.coverImage) {
        errors.coverImage = 'Cover Image is required';
    }
    return {
        errors,
        //if it is true it means errors doesnt occurs
        isValid: isEmpty(errors)
    }

}