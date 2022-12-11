import React from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, View, Image, Text } from "react-native";

import Cesta from "./componentes/Cesta";
import Topo from "../../componentes/Topo";
import useTextos from "../../hooks/useTextos";

import imagemTopo from "../../assets/produtores/topo.png";

export default function Produtor() {
    //https://reactnavigation.org/docs/use-route/
    const route = useRoute();
    const { nome, imagem, cestas } = route.params.produtor;

    const { tituloProdutor, tituloCestas } = useTextos();

    const TopoLista = () => {
        return <>
            <Topo titulo={tituloProdutor} imagem={imagemTopo} altura={150} />
            <View style={estilos.conteudo}>
                <View style={estilos.logo}>
                    <Image source={imagem} style={estilos.produtorImage} />
                    <Text style={estilos.produtor}>{nome}</Text>
                </View>
                <Text style={estilos.cestas}>{tituloCestas}</Text>
            </View>
        </>
    }

    return <FlatList
        ListHeaderComponent={TopoLista}
        data={cestas}
        renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />}
        style={estilos.lista}
    ></FlatList>
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});