import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import {loginScreen} from './screens/loginScreen'
import {registrationScreen} from './screens/registrationScreen'
import {Home} from './screens/Home'


const Stack=createStackNavigator();


const App = () => {
  return (
    

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen name="Register" component={registrationScreen}/>
      <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>

    
  
  )};

export default App;
