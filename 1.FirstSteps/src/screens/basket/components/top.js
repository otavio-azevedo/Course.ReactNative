import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import TextCustom from '../../../components/TextCustom';
import top from '../../../../assets/top-basket.png';

const screenWidth = Dimensions.get('screen').width;

export default function Top({ title }) {
  return <>
    <Image source={top} style={styles.top} />
    <TextCustom style={styles.title}>{ title }</TextCustom>
  </>
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 578 / 768 * screenWidth,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 26,
    lineHeight: 32,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});