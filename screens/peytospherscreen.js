import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PeytosphereScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>La Peytosphère</Text>
      <Text style={styles.text}>
        Bienvenue dans la Peytosphère, un espace interne aux réseaux d’IA. 
        Explore ce cosmos numérique où chaque idée est une étoile en devenir.
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
