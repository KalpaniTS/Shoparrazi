// screens/HomeScreen.js
// This is the HomeScreen component that serves as the landing page of the app.
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GROCERY</Text>
        <TouchableOpacity style={styles.searchIcon}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
        {/* Category icons would be mapped here */}
      </View>
      <View style={styles.flashSaleSection}>
        <Text style={styles.flashSaleTitle}>Flash Sale</Text>
        {/* Product card for Chobani Oat Milk */}
      </View>
      {/* Additional sections for Popular, New Arrival, etc. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
  categoriesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllButton: {
    // Style for the View All button
  },
  viewAllText: {
    // Style for the text inside the View All button
  },
  flashSaleSection: {
    // Style for the flash sale section
  },
  flashSaleTitle: {
    // Style for the flash sale title
  },
  // Add styles for the rest of the components
});

export default HomeScreen;