// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

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

const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = async () => {
    try {
      await firebase.firestore().collection('posts').add({
        title,
        content,
        // You might want to add more details like userID, timestamp, etc.
      });
      // Handle navigation or other actions after successful post creation
    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Error', 'Failed to create post');
    }
  };

  return (
    <View>
      <Text>Create Post</Text>
      <TextInput
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        placeholder="Content"
        onChangeText={(text) => setContent(text)}
        value={content}
        multiline
      />
      <Button title="Create Post" onPress={handleCreatePost} />
    </View>
  );
};

export default CreatePostScreen;
