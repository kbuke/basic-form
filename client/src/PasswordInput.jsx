export function PasswordInput({
    passwordRef, isAfterFirstSubmit,
    passwordError, setPasswordError,
    validatePassword
}){
    return(
        <div className={`form-group ${passwordError.length > 0 ? "error" : ""}`}>
            <label className="label">
                Password
            </label>
            <input 
                type="password"
                className="input"
                id="password"
                ref={passwordRef}
                onChange={
                    isAfterFirstSubmit
                        ? e => setPasswordError(validatePassword(e.target.value))
                        : undefined 
                }
            />
            {passwordError.length > 0 && (
                <div
                    className="msg"
                >
                    {passwordError.join(", ")}
                </div>
            )}
        </div>
    )
}