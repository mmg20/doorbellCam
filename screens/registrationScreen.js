import React, {useState, useEffect}  from 'react';
import { View, Text, Button, Alert, TextInput, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../styles/styles'


export const registrationScreen=({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const createUser = () => {
        if(password !==confirmPassword){
          alert("Password don't match!");
          return;
        }
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          Alert.alert('User created!');
          navigation.navigate('Login')
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

    const footerLink = ()=>{
      navigation.navigate("Login")
  };

return(
 
 <View style={styles.container}>
   <View style={styles.topContainer}>
    <Text style={styles.fontHead}>Sign up</Text>
   </View>
  
  
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
    secureTextEntry
    autoCapitalize='none'
    />
    <TextInput
    style={styles.textInputStyle}
    onChangeText={(text)=>setConfirmPassword(text)}
    value={confirmPassword}
    placeholder='Confirm password'
    secureTextEntry
    autoCapitalize='none'
    />

    <TouchableOpacity style={styles.buttonStyle}
    title="Register"
    onPress={()=>createUser()}>
      <Text style={styles.buttonText}>Create account</Text>
    </TouchableOpacity>

    <Text style={styles.footerText}>Already got an account? <Text style={styles.footerLink} onPress={footerLink}>Log in</Text></Text>

  </View>
  <View style={styles.circle}/>
  <View style={styles.circle2}/>
 </View>
 
 
 
 
 
 
 


)};