import React, { useState } from 'react';
import { Pressable, TextInput, View, Text } from 'react-native';
import { buscarEnderecoPorCep } from '../services/cepServico';
import styles from './style/styles';

const FormularioCep = ({ aoBuscarEndereco }) => {
  const [cep, setCep] = useState('');
  const [erro, setErro] = useState('');

  const handleBuscarEndereco = async () => {
    if (cep.length !== 8) {
      setErro('CEP deve ter 8 dígitos.');
      return;
    }

    setErro('');
    try {
      const endereco = await buscarEnderecoPorCep(cep);
      aoBuscarEndereco(endereco);
    } catch (err) {
      setErro('Erro ao buscar o endereço.');
    }
  };

  const handleLimpar = () => {
    setCep('');
    setErro('');
    aoBuscarEndereco(null);
  };

  return (
    <View style={styles.containerForm}>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        placeholderTextColor="#ffffff"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <View style={styles.botoesContainer}>
        <Pressable style={styles.botao} onPress={handleBuscarEndereco}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={handleLimpar}>
          <Text style={styles.textoBotao}>Limpar</Text>
        </Pressable>
      </View>
      {erro ? <Text style={styles.textoErro}>{erro}</Text> : null}
    </View>
  );
};

export default FormularioCep;
