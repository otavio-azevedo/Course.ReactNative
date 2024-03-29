import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { estilos } from './estilos';
import { TemaContext } from '../../contexts/TemaContext';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);

  const { login } = useContext(AuthenticationContext);

  function handleLogin() {
    const result = login(email, senha);
    if (result === 'ok') {
      navigation.navigate('Principal');
    } else {
      Alert.alert('Usuário ou senha inválidos');
    }
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={handleLogin}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

