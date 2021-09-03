import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {loginScreen} from './screens/loginScreen';
import {registrationScreen} from './screens/registrationScreen';
import {Home} from './screens/Home';
import {profile} from './screens/profile';
import auth from '@react-native-firebase/auth';



const Stack= createStackNavigator();
const Tabs= createBottomTabNavigator();

function LoginApp({setIsAuthenticated}) {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
      setIsAuthenticated(true);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
    const isAuthenticated = !!user;
    return null;
  };



  const HomeStack = () => {
 
  
    
    return(
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home}/>
      <Tabs.Screen name="Profile" component={profile}/>
    </Tabs.Navigator>
    );
    
  
  
  };
  



const App = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  return (
    
    <>
    <NavigationContainer>
      <Stack.Navigator>    
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen name="Register" component={registrationScreen}/>
      <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
    </>
  )};

export default App;
