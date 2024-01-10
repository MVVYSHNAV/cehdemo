// Import necessary modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app';
import 'firebase/auth';



// Import your custom screens
import LoginScreen from './component/login';
import FeedScreen from './component/feed.js';
import CreatePostScreen from './component/post.js';
import CommentsScreen from './component/comment.js';

// Initialize Firebase (this should be done in your app setup)
const firebaseConfig = {
  apiKey: "AIzaSyAX0_aOjZx16i5tLEJ49X7QNLUZkvK6nww",
  authDomain: "our-philosophy-359114.firebaseapp.com",
  projectId: "our-philosophy-359114",
  storageBucket: "our-philosophy-359114.appspot.com",
  messagingSenderId: "396038799354",
  appId: "1:396038799354:web:fed58696df1ad85ac4ee43",
  measurementId: "G-9F33C8PBGW"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="post" component={CreatePostScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
