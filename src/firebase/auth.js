import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";

export const handleSignup = async (e, fname, lname, email, password) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    console.log(user);
    console.log("User Registered Successfully!!");
    if (user) {
      await setDoc(doc(db, "Users", user.uid), {
        firstName: fname,
        lastName: lname,
        email: email,
      });
    }
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
