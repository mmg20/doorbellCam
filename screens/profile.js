import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import auth from '@react-native-firebase/auth';

function LoginApp() {
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
  };

  const logoff = (navigation) => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'))
    .then(() => navigation.navigate('Login'));
};


export const profile = ({navigation}) => {

    return(
        <View>
        <LoginApp/>
        <Button
        title="logoff"
        onPress={()=>logoff(navigation)}/>
        </View>

    )

};