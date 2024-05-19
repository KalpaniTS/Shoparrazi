// screens/ExploreScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExploreScreen = () => {
  // Dummy data for previously bought items and categories
  const buyAgainItems = [
    // ... array of items the user may want to buy again
  ];
  const categories = [
    { id: '1', name: 'Fruits' },
    { id: '2', name: 'Vegetables' },
    // ... more categories
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.buyAgainSection}>
        <Text style={styles.sectionTitle}>Buy again</Text>
        <FlatList
          data={buyAgainItems}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.buyAgainItem}>
              {/* Render item image and details */}
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
  },
  buyAgainSection: {
    // Styles for the buy again section
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  buyAgainItem: {
    // Styles for buy again items
  },
  categoriesSection: {
    // Styles for the categories section
  },
  categoryItem: {
    // Styles for category items
    margin: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ExploreScreen;
