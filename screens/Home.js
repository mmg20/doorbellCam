import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


function LogApp() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}





export const Home = () => {

  const reference = storage().ref('0109202114:47:27.jpg').getDownloadURL();



  return (

    <View>
      


      <Text>

        Witaj przyjacielu xD
      </Text>

      <LogApp />

    </View>

  )

};