import React, { useState } from 'react';
import { View, Image } from 'react-native';
import FormularioCep from './components/FormularioCep';
import ExibicaoEndereco from './components/ExibicaoEndereco';
import logoCorreio from './assets/logo_correio.png';
import styles from './style/styles';

const App = () => {
  const [endereco, setEndereco] = useState(null);

  const handleBuscarEndereco = (enderecoBuscado) => {
    setEndereco(enderecoBuscado);
  };

  return (
    <View style={styles.containerApp}>
      <Image source={logoCorreio} style={styles.logo} />
      <FormularioCep aoBuscarEndereco={handleBuscarEndereco} />
      <ExibicaoEndereco endereco={endereco} />
    </View>
  );
};

export default App;
