import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState("Bienvenue dans Souffle d'or !");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button
        title="Inspire-moi 🌬️"
        onPress={() => {
          const affirmations = [
            "Tu es capable.",
            "Chaque souffle compte.",
            "La paix est en toi.",
            "Crée ton propre or."
          ];
          const idx = Math.floor(Math.random() * affirmations.length);
          setMessage(affirmations[idx]);
        }}
      />
      <View style={styles.link}>
        <Button
          title="→ À propos"
          onPress={() => navigation.navigate('À propos')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 22, color: '#333', textAlign: 'center', marginBottom: 20
  },
  link: {
    marginTop: 30, width: '50%'
  }
});
