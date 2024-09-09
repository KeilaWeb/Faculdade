import React from 'react';
import { View, Text } from 'react-native';
import styles from './style/styles';

const ExibicaoEndereco = ({ endereco }) => {
  if (!endereco) return null;

  return (
    <View style={styles.containershow}>
      <Text style={styles.texto}>Rua: {endereco.logradouro}</Text>
      <Text style={styles.texto}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.texto}>Cidade: {endereco.localidade}</Text>
      <Text style={styles.texto}>Estado: {endereco.uf}</Text>
      <Text style={styles.texto}>DDD: {endereco.ddd}</Text>
    </View>
  );
};

export default ExibicaoEndereco;
