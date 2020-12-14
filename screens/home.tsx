import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const [temperatura, setTemperatura] = useState('');
  const navigation = useNavigation();


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Text style={styles.title}>Olá! Seja bem-vindo ao Termômetro Cervejeiro!</Text>
        <View style={styles.separator}/>
        <View style={styles.separator}/>
        <Text style={styles.text2}>Digite a temperatura desejada:</Text>
        <TextInput keyboardType="number-pad" placeholder='Em graus Celsius...' value={temperatura} onChangeText={text =>setTemperatura(text)} style={styles.input}/>
        <View style={styles.separator}/>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Termomêtro')}}> 
          <Text style={styles.textButton}>Iniciar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#7B68EE",
    padding: 40,
    
  },
  title: {
    color: "#FF6347",
    fontSize: 50,
    fontWeight: 'bold',
  },
  text2: {
    color: "#FF6347",
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    color: "#7B68EE",
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:"#FF6347",
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FF6347"
  },
  button: {
    color: "#FF6347",
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor:"#FF6347",
    width: '80%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 35,
    color: "#7B68EE",
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
