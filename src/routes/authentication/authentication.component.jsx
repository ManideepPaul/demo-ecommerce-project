
import {
  signInWithGooglePopup,
  createUserDoucumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {

  return (
    <>
      <h1>SignIn Page</h1>
      <SignInForm />
      <SignUpForm />
    </>
  );
};

export default Authentication;
