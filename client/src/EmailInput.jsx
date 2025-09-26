
export function EmailInput({
    emailRef, isAfterFirstSubmit,
    emailError, setEmailError,
    validateEmail
}){
    return(
        <div className={`form-group ${emailError.length > 0 ? "error" : ""}`}>
            <labe className="label">Email</labe>
            <input 
                onChange={isAfterFirstSubmit
                    ? e => setEmailError(validateEmail(e.target.value))
                    : undefined
                }
                className="input"
                type="email"
                ref={emailRef}
            />
            {emailError.length > 0 && (
                <div className="msg">{emailError.join(", ")}</div>
            )}
        </div>
    )
}