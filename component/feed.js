// Import necessary modules
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

AppRegistry.registerComponent(appName, () => App);


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

const FeedScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to fetch posts from Firebase Firestore
    const fetchPosts = async () => {
      try {
        const snapshot = await firebase.firestore().collection('posts').get();
        const postsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
  }, []);

  return (
    <View>
      <Text>Feed</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
            {/* Render other post details */}
          </View>
        )}
      />
    </View>
  );
};

export default FeedScreen;
