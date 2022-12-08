import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './estilos';
import { getUserByName } from '../../services/requests/users';

export default function Principal({ navigation }) {
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState({});

    async function buscar() {
        const result = await getUserByName(userName);

        if (result) {
            setUser(result);
        } else {
            Alert.alert('Usuário não encontrado');
            setUser({});
        }
    }

    return (
        <ScrollView>
            <View style={estilos.container}>
                {
                    !!user.login &&
                    <>
                        <View style={estilos.fundo} />
                        <View style={estilos.imagemArea}>
                            <Image source={{ uri: user.avatar_url }} style={estilos.imagem} />
                        </View>
                        <Text style={estilos.textoNome}>{user.name}</Text>
                        <Text style={estilos.textoEmail}>{user.email}</Text>
                        <View style={estilos.seguidoresArea}>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{user.followers}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                            </View>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{user.following}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Repositorios', { id: user?.id })}>
                            <Text style={estilos.repositorios}>
                                Ver os repositórios
                            </Text>
                        </TouchableOpacity>
                    </>
                }
                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={userName}
                    onChangeText={setUserName}
                />

                <TouchableOpacity
                    style={estilos.botao}
                    onPress={buscar}
                >
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
