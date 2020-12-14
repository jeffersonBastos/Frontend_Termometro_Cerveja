import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import termometroImg from '../assets/images/termometro.png';


export default function Termometro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Termomêtro Cervejeiro</Text>
      <View style={styles.separator} />
      <View style={styles.content}>
        <Image style={styles.termometroImg} source={termometroImg}/>
        <Text style={styles.textContent}>2 ºC</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{}}> 
        <Text style={styles.textButton}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#7B68EE",
  },
  title: {
    color: "#FF6347",
    fontSize: 40,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  textContent: {
    fontSize: 40,
    color: "#FF6347",
    fontWeight: 'bold',
  },
  termometroImg: {
    width: 180,
    height: 180,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
});
