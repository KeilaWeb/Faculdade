import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilos do App.js
  containerApp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFD752',
  },
  logo: {
    width: 200,
    height: 136,
    marginBottom: 20,
  },

  // Estilos do FormularioCep.js
  containerForm: {
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
    color: '#072E58',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botao: {
    flex: 1,
    backgroundColor: '#072E58',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
  },
  textoErro: {
    color: 'red',
    marginTop: 10,
  },

  // Estilos do ExibicaoEndereco.js
  containershow: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  texto: {
    color: '#072E58',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default styles;
