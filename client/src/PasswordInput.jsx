export function PasswordInput({
    passwordRef, passwordError
}){
    return(
        <>
            <input 
                type="password"
                placeholder="Enter your password"
                style={{marginBottom: "10px"}}
                ref={passwordRef}
            />
            <p>
                {passwordError}
            </p>
        </>
    )
}