import { View, Text, Button, Alert, StyleSheet, clear, input } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { State, TextInput } from 'react-native-gesture-handler';
import {Verificacao} from './src/verificacao';
import {Conceito} from './src/conceito';
import {Algoritmo} from './src/algoritmo';
import {Github} from './src/github';
import {Sobre} from './src/sobre';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Verificação" component={Verificacao} />
      <Drawer.Screen name="Conceito" component={Conceito} />
      <Drawer.Screen name="Algoritmo" component={Algoritmo} />
      <Drawer.Screen name="Github" component={Github} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
