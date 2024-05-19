// screens/CartScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
  // Dummy data for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Chobani Oat Milk Barista Edition',
      size: '1L',
      price: 4.00,
      quantity: 1,
      store: 'Coles',
    },
    // ... more items
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetail}>Size: {item.size}</Text>
            <Text style={styles.itemDetail}>Price: ${item.price.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                <Ionicons name="remove-circle-outline" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetail: {
    fontSize: 16,
    marginVertical: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  // Add styles for the rest of the components
});

export default CartScreen;
