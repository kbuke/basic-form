
export function EmailInput({
    emailRef, emailError
}){
    return(
        <>
            <input 
                style={{marginBottom: "10px"}}
                type="text"
                placeholder="Please enter email address"
                ref={emailRef}
            />
            <p>{emailError}</p>
        </>
    )
}