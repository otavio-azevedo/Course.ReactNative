import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { createRepo } from '../../services/requests/repositories';
import estilos from './estilos';

export default function CriarRepositorio({ route, navigation }) {
    const [name, setName] = useState('');
    const [data, setData] = useState('');

    async function create() {
        const result = await createRepo(
            route.params?.id,
            name,
            data);
        if (result === 'success') {
            Alert.alert('Repositório criado com sucesso!');
            navigation.goBack();
        } else {
            Alert.alert('Erro ao criado repositório!');
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
            onPress={create}
            >
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
