import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { signupUser } from "../api/user/signup";

export const handleSignup = async (e, uname, fname, lname, email, password) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const result = await signupUser(uname, fname, lname, email);
    console.log(result);
    const user = auth.currentUser;
    console.log(user);
    console.log("User Registered Successfully!!");
  } catch (error) {
    console.log(error.message);
  }
};

export const handleLogin = async (e, email, password) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export const handleLogout = () => {
  signOut(auth);
  console.log("User logged out");
};
