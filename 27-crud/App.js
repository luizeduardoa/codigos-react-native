import 'react-native-gesture-handler';

import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Evento from './components/Evento';
import UsuarioGithub from './components/UsuarioGithub';
import DimensoesFixas from './components/DimensoesFixas';


// ========================================
// DRAWER
// ========================================

const Drawer = createDrawerNavigator();


// ========================================
// STACK
// ========================================

const Stack = createNativeStackNavigator();


// ========================================
// BOTTOM TABS
// ========================================

const Tab = createBottomTabNavigator();


// ========================================
// TELA SOBRE
// ========================================

function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Sobre
      </Text>

      <Text style={styles.texto}>
        Aplicativo desenvolvido em React Native.
      </Text>
    </View>
  );
}


// ========================================
// TELA INICIAL
// ========================================

function TelaInicial() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Evento"
        component={Evento}
      />

      <Tab.Screen
        name="Github"
        component={UsuarioGithub}
      />

    </Tab.Navigator>
  );
}


// ========================================
// STACK DO HOME
// ========================================

function HomeStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={TelaInicial}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}


// ========================================
// APP PRINCIPAL
// ========================================

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator>

        <Drawer.Screen
          name="Home"
          component={HomeStack}
        />

        <Drawer.Screen
          name="Dimensões Fixas"
          component={DimensoesFixas}
        />

        <Drawer.Screen
          name="Sobre"
          component={Sobre}
        />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}


// ========================================
// ESTILOS
// ========================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  texto: {
    fontSize: 18,
    textAlign: 'center',
  },

});