import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
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


  

  const logoff = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export const loginScreen=({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logToApp = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Logged In!');
        })
        .then(()=>{
            navigation.navigate('Home')
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Invaild password');
            console.log('Invaild password');
          }
      
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Invaild email');
            console.log('That email address is invalid!');
          }
          if (error.code === 'auth/user-not-found') {
            Alert.alert('User not found');
            console.log('User not found');
          }
      
          console.error(error);
        });
      };

return(
 <View>
<Text>login screen</Text>

<Button
title="registration"
onPress={()=>navigation.navigate('Register')}/>


    
<LoginApp></LoginApp>

<TextInput
onChangeText={(text)=>setEmail(text)}
value={email}
placeholder='E-mail'
/>

<TextInput
onChangeText={(text)=>setPassword(text)}
value={password}
placeholder='Password'
/>

<Button
title="LOG IN"
onPress={()=>logToApp()}/>

<Button
title="logoff"
onPress={()=>logoff()}/>


 </View>

)


};