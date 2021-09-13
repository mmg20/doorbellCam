import React, {useState, useEffect} from 'react';
import { View, Text, Button, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../styles/styles';




export const loginScreen=({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dateToFormat = '1976-04-19T12:59-0500';
    const footerLink = ()=>{
      navigation.navigate("Register")
  };

    const logToApp = () => {

        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Logged In!');
        })
        .then(()=>{
            navigation.navigate('HomeStack')
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
  <View style={styles.topContainer}>
    <Text style={styles.fontHead}>Login</Text>
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


    <TouchableOpacity style={styles.buttonStyle}
    title="LOGIN"
    onPress={()=>logToApp()}>
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
        
        <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerLink} onPress={footerLink}>Sign up</Text></Text>
       
        
       <Text> date: {moment().format('MMMM Do YYYY, h:mm:ss a')}</Text>
    
  </View>
  <View style={styles.circle}/>
  <View style={styles.circle2}/>
 </View>

)


};