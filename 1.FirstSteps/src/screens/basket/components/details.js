import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TextCustom from '../../../components/TextCustom';
import ButtonCustom from '../../../components/ButtonCustom';

export default function Details({ name, companyLogo, companyName, description, price, textButton }) {
  return <>
    <TextCustom style={styles.name}>{name}</TextCustom>

    <View style={styles.company}>
      <Image source={companyLogo} style={styles.companyLogo} />
      <TextCustom style={styles.companyName}>{companyName}</TextCustom>
    </View>

    <TextCustom style={styles.description}>{description}</TextCustom>
    <TextCustom style={styles.price}>{price}</TextCustom>

  <ButtonCustom text={textButton} style={styles.button}></ButtonCustom>
 
  </>
}

const styles = StyleSheet.create({
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  company: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  companyLogo: {
    width: 32,
    height: 32,
  },
  companyName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
  },
})