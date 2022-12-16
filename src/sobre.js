import React, { Component, useState } from 'react';
import { PalindromeChecker } from './palindromeChecker';
import { View, Text, Button, Alert, StyleSheet, clear } from 'react-native';
import { State, TextInput } from 'react-native-gesture-handler';


export function Sobre() {
    const styles = StyleSheet.create({

        textStyle: {
            color:'black'
        }
    });
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.textStyle}>Aplicativo simples criado em React Native</Text>
        <Text style={styles.textStyle}>com o intuito de demonstrar o que são palíndromos.</Text>
      </View>
    );
  }