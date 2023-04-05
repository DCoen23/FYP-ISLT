import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HamburgerButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="menu-outline" size={30} color="#fff" />
    </TouchableOpacity>
  );
}

export default HamburgerButton;