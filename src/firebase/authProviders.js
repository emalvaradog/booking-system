import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const user = await signInWithPopup(FirebaseAuth, googleProvider);

    return {
      ok: true,
      user: user.user,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const logoutFirebaseUser = async () => {
  return await FirebaseAuth.signOut();
};
