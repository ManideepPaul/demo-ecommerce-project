import { signInWithGooglePopup, createUserDoucumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDoucumentFromAuth(user)
        // console.log(user)
    }
    return (
        <>
            <h1>SignIn Page</h1>
            <button onClick={logGoogleUser}>SIGNIN with Google</button>
        </>
    )
}

export default SignIn;