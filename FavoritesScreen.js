// src/screens/FavoriteScreen.js
// This is the Favorites component that shows the user's favorite products.
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const FavoriteScreen = () => {
  // Dummy data for favorite items
  const favoriteItems = [
    {
      id: '1',
      name: 'Product 1',
      // Additional product details
    },
    {
      id: '2',
      name: 'Product 2',
      // Additional product details
    },
    // ... more favorite items
  ];

  const handleAddToCart = (itemId) => {
    // Logic to add the item to the cart
  };

  const handleBuyNow = (itemId) => {
    // Logic to buy the item immediately
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddToCart(item.id)}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buyNowButton]}
                onPress={() => handleBuyNow(item.id)}
              >
                <Text style={styles.buttonText}>Buy it now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 16,
    margin: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    borderRadius: 5,
  },
  buyNowButton: {
    backgroundColor: '#000',
  },
  buttonText: {
    color: '#fff',
  },
  // Add styles for the rest of the components
});

export default FavoriteScreen;
