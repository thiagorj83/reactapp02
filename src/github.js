import React, { Component, useState } from 'react';
import { PalindromeChecker } from './palindromeChecker';
import { View, Text, Button, Alert, StyleSheet, clear, Linking } from 'react-native';
import { State, TextInput } from 'react-native-gesture-handler';


export function Github() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'black'}}>O link no Github para acesso ao código fonte da função é</Text>
        <Text
            style={{color:'blue'}}
            onPress={() => {
              Linking.openURL('https://github.com/thiagorj83');
            }}>
            https://github.com/thiagorj83
          </Text>
      </View>
    );
  }