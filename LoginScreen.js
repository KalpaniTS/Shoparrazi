// src/screen/LoginScreen.js
// This is the LoginScreen component for the React Native version of the app.

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="Your email" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with email</Text>
      </TouchableOpacity>
      <Text style={styles.or}>Or</Text>
      <TouchableOpacity style={styles.button}>
        {/* Google and Facebook icons can be added using react-native-vector-icons */}
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>Don't have a Shopparazzi account? Sign up</Text>
      {/* Bottom Navigation Component */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Add styles here
});

export default LoginScreen;