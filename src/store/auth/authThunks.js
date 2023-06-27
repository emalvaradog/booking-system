import { logoutFirebaseUser, signInWithGoogle } from "@/firebase/authProviders";
import { FirebaseAuth } from "@/firebase/config";

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    const result = await signInWithGoogle();
    if (!result.ok) startUserLogout();
  };
};

export const startUserLogout = () => {
  return async (dispatch) => {
    await FirebaseAuth.signOut();
  };
};
