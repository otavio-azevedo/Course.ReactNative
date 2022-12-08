import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { alterRepo, deleteRepo } from '../../services/requests/repositories';

export default function InfoRepositorio({ route, navigation }) {
    const [name, setName] = useState(route.params?.item.name);
    const [data, setData] = useState(route.params?.item.data);

    async function saveRepoModifications() {
        const result = await alterRepo(
            route.params?.item.id,
            route.params?.item.userId,
            name,
            data);
        if (result === 'success') {
            Alert.alert('Repositório alterado com sucesso!');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao alterar repositório!');
        }
    }

    async function deleteRepository() {
        const result = await deleteRepo(route.params?.item.id);
        if (result === 'success') {
            Alert.alert('Repositório deletado com sucesso!');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao deletar repositório!');
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity
                style={estilos.botao}
                onPress={saveRepoModifications}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[estilos.botao, { backgroundColor: '#DD2B2B', marginTop: 10 }]}
                onPress={deleteRepository}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
