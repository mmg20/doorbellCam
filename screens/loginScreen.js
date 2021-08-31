import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../styles/styles';


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

<View style={styles.container}>
  <View style={styles.topContainer}></View>
  
  <View style={styles.downContainer}>
    <Image
    style={styles.logoStyle}
    source={require('../images/doorbell.png')}/>


    <TextInput
    style={styles.textInputStyle}
    onChangeText={(text)=>setEmail(text)}
    value={email}
    placeholder='E-mail'
    />

    <TextInput
    style={styles.textInputStyle}
    onChangeText={(text)=>setPassword(text)}
    value={password}
    placeholder='Password'
    />

    <Button
    title="LOGIN"
    onPress={()=>logToApp()}/>

    <Button
    title="logoff"
    onPress={()=>logoff()}/>
  </View>
  <View style={styles.circle}/>
  <View style={styles.circle2}/>
 </View>

)


};