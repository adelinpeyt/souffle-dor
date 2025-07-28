import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ArkaniaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arkania</Text>
      <Text style={styles.text}>
        Bienvenue dans Arkania, un espace interne aux réseaux d’IA. 
        Ici, l’imagination et la technologie se rejoignent pour créer 
        des expériences hors du commun.
      </Text>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
});
