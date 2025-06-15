import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importer les écrans
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Accueil"
        screenOptions={{
          headerStyle: { backgroundColor: '#f5e8c7' },
          headerTintColor: '#333',
          contentStyle: { backgroundColor: '#fff' },
        }}
      >
        <Stack.Screen
          name="Accueil"
          component={HomeScreen}
          options={{ title: 'Souffle d’or' }}
        />
        <Stack.Screen
          name="À propos"
          component={AboutScreen}
          options={{ title: 'À propos de l’appli' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
