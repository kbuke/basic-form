import { useRef, useState } from 'react'
import "./styles.css"
import { EmailInput } from './EmailInput'
import { PasswordInput } from './PasswordInput'

function App() {
  const emailRef = useRef()
  const [emailError, setEmailError] = useState()

  const passwordRef = useRef()
  const [passwordError, setPasswordError] = useState()

  const handleLogin = (e) => {
    e.preventDefault()
    const emailAddress = emailRef.current.value
    const emailAddressLength = emailAddress.length
    if(emailAddressLength === 0){
      setEmailError("Error! Please enter an email address")
    } else if (!emailAddress.endsWith("@webdevsimplified.com")){
      setEmailError("Error! Email address must end with @webdevsimplified.com")
    }
    else{
      setEmailError("Success!")
    }

    const currentPassword = passwordRef.current.value 
    const passwordLength = currentPassword.length 
    const passwordUpperCase = /[A-Z]/.test(currentPassword)
    const passwordLowerCase = /[a-z]/.test(currentPassword)
    const passwordNumber = /\d/.test(currentPassword)
    console.log("Upper case:", passwordUpperCase)
    if(passwordLength === 0){
      setPasswordError("Please enter a password")
    } else if (passwordLength > 10){
      setPasswordError("Password can not be longer than 10 characters")
    } else if (!passwordUpperCase){
      setPasswordError("Password must include an uppercase letter")
    } else if (!passwordLowerCase){
      setPasswordError("Password must include a lower case letter")
    } else if (!passwordNumber){
      setPasswordError("Password must include a number")
    } else {
      setPasswordError()
    }
  } 

  console.log(`Email Address: ${emailError}`)
  

  return (
    <form
      style={{display: "grid"}}
      onSubmit={e => handleLogin(e)}
    >
      <h1>Login</h1>
      <EmailInput 
        emailRef={emailRef}
        emailError={emailError}
      />
      <PasswordInput 
        passwordRef={passwordRef}
        passwordError={passwordError}
      />
      <button>
        Login
      </button>
    </form>
  )
}

export default App
