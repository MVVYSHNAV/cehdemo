// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        // Handle navigation or other actions after successful login
      })
      .catch((error) => {
        // Handle login errors
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
