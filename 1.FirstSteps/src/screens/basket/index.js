import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Top from './components/top';
import Details from './components/details';
import Item from './components/item';
import TextCustom from '../../components/TextCustom';

export default function Basket({ top, details, itens }) {
  return <>
    <FlatList
      data={itens.list}
      renderItem={Item}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={() => {
        return <>
          <Top {...top} />
          <View style={styles.basket}>
            <Details {...details} />
            <TextCustom style={styles.title}>{itens.title} </TextCustom>
          </View>
        </>
      }}
    />
  </>
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginTop: 8,
    fontSize: 20,
    lineHeight: 32
  },
});