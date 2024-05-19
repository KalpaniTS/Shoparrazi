// src/components/WelcomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeScreen() {
  return (
    <div>
      <h1>Welcome to Grocery Shopping</h1>
      <p>Unlock Exclusive Grocery Deals from Companies with Ease</p>
      <Link to="/screens/HomeScreen.js">Get Started</Link>
    </div>
  );
}

export default WelcomeScreen;