import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const[text, setText] = useState('')
  const handlerSum = () => setCount(count + 1)
  const handlerSub = () => setCount(count - 1)
  const handlerText = (text) => setText(text)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.subtitle}> O valor do contador é {count} </Text>
      <div style={styles.buttons}>
        <Pressable style={styles.buttonSum} onPress={handlerSum}>
          <Text style={styles.text}>Somar</Text>
        </Pressable>      
        <Pressable style={styles.buttonSub} onPress={handlerSub}>
          <Text style={styles.text}>Subtrair</Text>
        </Pressable>
      </div>
      <TextInput 
        style={styles.inputText}
        placeholder='Digite aqui'
        onChangeText= {handlerText}  
      />
      <Text> O texto digitado é {text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSum: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },

  buttonSub: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'grey',
    marginTop: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: '30px',
    margin: '30px',
  },

  subtitle: {
    fontSize: '20px',
    margin: '80px',
  },

  inputText: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    width: '80%',
  }
});
