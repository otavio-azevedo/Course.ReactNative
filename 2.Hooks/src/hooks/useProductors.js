import { useState, useEffect } from 'react';
import { loadProdutores } from '../services/loadData';

export default function useProductors() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    //O UseEffect é uma função que vem do React que, se o segundo parâmetro for uma lista vazia ([]),
    // faz uma ação (apenas uma vez) quando um componente é carregado.
    useEffect(() => {
        const ret = loadProdutores();

        ret.list.sort(
            (productor1, productor2) => productor1.distance - productor2.distance,
        );

        setTitle(ret.title);
        setList(ret.list);

        console.log(loadProdutores());
    }, []);

    return [title, list];
}