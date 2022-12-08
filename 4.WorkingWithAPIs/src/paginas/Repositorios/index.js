import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { getRepoByUserId, getRepoByName } from '../../services/requests/repositories';
import { useIsFocused } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const [repoName, setRepoName] = useState('');

    //console.log(repoName);
    async function filtrarRepo() {
        const result = await getRepoByName(route.params.id, repoName);
        setRepo(result);
        setRepoName('');
    }

    //Necessário para refazer a requisição ao retornar para a lista de repositórios
    const isOnScreen = useIsFocused();

    useEffect(async () => {
        const result = await getRepoByUserId(route.params?.id);
        setRepo(result);
    }, [isOnScreen]);

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', {id: route.params?.id})}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>

            <FlatList
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={repo => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', { item })}
                    >
                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>

                    </TouchableOpacity>
                )}
            />

            <TextInput
                placeholder="Busque por um repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={repoName}
                onChangeText={setRepoName}
            />

            <TouchableOpacity
                style={estilos.botao}
                onPress={filtrarRepo}
            >
                <Text style={estilos.textoBotao}>
                    Buscar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
