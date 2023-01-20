import React, { useEffect } from "react";
import { useState } from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const useDashboardRoutes = () => {

    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber; // unsubscribe on unmount
  }, []);

  return {
    user,
    initializing,
  };
};
