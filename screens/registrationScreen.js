import React, {useState, useEffect}  from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';


export const registrationScreen=({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          Alert.alert('User created!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });

    }



return(
 <View>
<Text>registration screen</Text>


<Button
title="Login screen"
onPress={()=>navigation.navigate('Login')}>

</Button>


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
title="Sign Up!"
onPress={()=>createUser()}/>

 </View>

)


};