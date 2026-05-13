import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const GoogleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    setUser,
    setLoading,
    loading,
    userSignIn,
    signInGoogle,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
