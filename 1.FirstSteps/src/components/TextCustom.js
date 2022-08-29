import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TextCustom({ children, style }) {
  let baseStyle = baseStyles.text;
  
  if(style?.fontWeight === 'bold') {
    baseStyle = baseStyles.textBold;
  }

  return <Text style={[style, baseStyle]}>{ children }</Text>
}

const baseStyles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textBold: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  }
});