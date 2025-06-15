import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos de Souffle d’or</Text>
      <Text style={styles.text}>
        Cette appli te souffle des affirmations inspirantes
        pour t’aider à savourer chaque instant de vie.
      </Text>
      <Button
        title="← Retour"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#333'
  },
  text: {
    fontSize: 18, textAlign: 'center', marginBottom: 30, color: '#555'
  }
});
