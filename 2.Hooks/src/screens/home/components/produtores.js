import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { loadProdutores } from '../../../services/loadData';

import Productor from './Productor';

//hooks example
export default function Produtores({ top: Top }) {

    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

//O UseEffect é uma função que vem do React que, se o segundo parâmetro for uma lista vazia ([]), faz uma ação (apenas uma vez) quando um componente é carregado.
    useEffect(() => {
        const ret = loadProdutores();

        setTitle(ret.title);
        setList(ret.list);

        console.log(loadProdutores());
    }, []);

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