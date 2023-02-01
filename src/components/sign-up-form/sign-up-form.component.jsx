import { useState } from "react";
import { createAuthWithEmailAndPassword, createUserDoucumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;
    // console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) alert('Password mismatch')

        try {
            let { user } = await createAuthWithEmailAndPassword(email, password);
            // console.log(response)
            user = {...user, displayName} // because in this case user object will contain displayName as null assigining the displayName value into the user object.
            await createUserDoucumentFromAuth(user)
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') alert('Email already exist');
            else console.log(error)
        }
    }

    const handleChage = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required value={displayName} onChange={handleChage} name='displayName' />

                <label htmlFor="">Email</label>
                <input type="email" required value={email} onChange={handleChage} name='email' />

                <label htmlFor="">Password</label>
                <input type="password" required value={password} onChange={handleChage} name='password' />

                <label htmlFor="">Confirm Password</label>
                <input type="password" required value={confirmPassword} onChange={handleChage} name='confirmPassword' />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm