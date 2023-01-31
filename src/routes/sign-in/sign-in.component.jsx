import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDoucumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // the useEffect will get the user authentication result after redirected from google
  useEffect(() => redirectResult, []);

  const redirectResult = async () => {
    const response = await getRedirectResult(auth); // this helps us to get validate user if sign is was failed or passed after the redirect to google.

    if (response) {
      await createUserDoucumentFromAuth(response.user);
      console.log(response.user);
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoucumentFromAuth(user);
    // console.log(user)
  };

  return (
    <>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with Google Redirect
      </button>
    </>
  );
};

export default SignIn;
