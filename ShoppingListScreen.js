// src/screens/ShoppingListScreen.js
// This is the ShoppingList screen for the React Native version of the app.

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShoppingList = () => {
  // Dummy data for demonstration
  const shoppingItems = [
    {
      id: '1',
      name: 'Chobani Oat Milk Barista Edition',
      size: '1L',
      price: '$4.00',
      store: 'Coles',
      quantity: 1,
    },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetail}>Size: {item.size}</Text>
            <Text style={styles.itemDetail}>Price: {item.price}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity>
                <Ionicons name="remove-circle-outline" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity>
                <Ionicons name="add-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.itemDetail}>Store: {item.store}</Text>
          </View>
        )}
      />
      {/* Bottom Navigation Component */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Add styles here
});

export default ShoppingList;