export function validateEmail(email){
    const errors = []

    if(email.length === 0){
        errors.push("Please enter an email address")
    }

    if(!email.endsWith("@webdevsimplified.com")){
        errors.push("Email must end with @webdevsimplified.com")
    }

    return errors
}

export function validatePassword(password){
    const errors = []

    if (password.length === 0){
        errors.push("Must enter a password")
    }

    if (!/[A-Z]/.test(password)){
        errors.push("Password must include an uppercase letter")
    }

    if (!/[a-z]/.test(password)){
        errors.push("Password must include a lowercase letter")
    }

    if(!/\d/.test(password)){
        errors.push("Password must include a number")
    }

    return errors
}