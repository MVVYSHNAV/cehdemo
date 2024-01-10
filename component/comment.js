// Import necessary modules
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
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

const CommentsScreen = ({ route }) => {
  const { postId } = route.params; // Get postId from navigation route
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    // Function to fetch comments for the specific post from Firebase Firestore
    const fetchComments = async () => {
      try {
        const commentsRef = firebase.firestore().collection('comments').where('postId', '==', postId);
        const snapshot = await commentsRef.get();
        const commentsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    // Call the fetchComments function
    fetchComments();
  }, [postId]);

  const handleAddComment = async () => {
    if (commentText.trim() !== '') {
      try {
        await firebase.firestore().collection('comments').add({
          postId,
          text: commentText,
          // You might want to add more details like userId, timestamp, etc.
        });
        setCommentText('');
        // After adding comment, you might want to fetch comments again to update the list
      } catch (error) {
        console.error('Error adding comment:', error);
        Alert.alert('Error', 'Failed to add comment');
      }
    }
  };

  return (
    <View>
      <Text>Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            {/* Render other comment details */}
          </View>
        )}
      />
      <TextInput
        placeholder="Add a comment"
        onChangeText={(text) => setCommentText(text)}
        value={commentText}
      />
      <Button title="Add Comment" onPress={handleAddComment} />
    </View>
  );
};

export default CommentsScreen;
