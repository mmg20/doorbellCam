import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Alert, Image, TouchableOpacity, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import { ImageList } from './imagelist';
import styles from '../styles/styles';



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

  
  
  const [serialNumber, setSerialNumber]= useState();
  const [isSerialNumberProvided, setIsSerialNumberProvided]= useState(false);
  



  return (

    <View style={styles.container}>
      <View style={styles.topHomeContainer}>
        <ImageBackground style={styles.homeImage} source={require('../images/doors.png')}></ImageBackground>
      </View>
      <View style={styles.downHomeContainer}>
        
      <LogApp />

    {!isSerialNumberProvided && (
      <>
      <Text>Please provide serial number</Text>
      <TextInput
      style={styles.textInputStyle}
      onChangeText={(text)=>setSerialNumber(text)}
      value={serialNumber}
      placeholder='serial number'
      />
      <TouchableOpacity style={styles.buttonStyle}
      title="confirm"
      onPress={()=>setIsSerialNumberProvided(true)}>
        <Text style={styles.buttonText}>confirm</Text>
      </TouchableOpacity>
      </>
    )}
    
      {isSerialNumberProvided && <ImageList serialNumber={serialNumber}/>}
      </View>
    <View style={styles.circle}/>
    <View style={styles.circle2}/>
     

    </View>


  )

};