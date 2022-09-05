import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import useProductors from '../../../hooks/useProductors';

import Productor from './Productor';


export default function Productors({ top: Top }) {

    //custom hooks example
    const [title, list] = useProductors();

    const Header = () => {
        return <>
            <Top />
            <Text style={styles.title}>{title}</Text>
        </>
    };

    return <FlatList
        data={list}
        renderItem={({ item }) => <Productor {...item} />}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={Header}
    />;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginVertical: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
});