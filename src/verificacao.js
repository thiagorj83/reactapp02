import React, { Component, useState } from 'react';
import { PalindromeChecker } from './palindromeChecker';
import { View, Text, Button, Alert, StyleSheet, clear } from 'react-native';
import { State, TextInput } from 'react-native-gesture-handler';



export function Verificacao() {

    const styles = StyleSheet.create({
        input: {
          height: 40,
          width: 200,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          color:'black'
        },
      });
      

    const [text, setText] = React.useState('');
    const f1 = new PalindromeChecker()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput 
                placeholder='Digite aqui a palavra ou frase'
                style={styles.input}
                onChangeText={(text) => setText(text)}
                value={text}
            />
            <View style={{ flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                    <Button
                        title="Analisar"
                        // onPress={() => Alert.alert(text)}
                        onPress={() => f1.isPalindrome(text)}
                    />
                </View>
                <View>
                    <Button
                        title="Limpar"
                        onPress={(text) => setText('')}
                    />
                </View>
            </View>
        </View>
    );
}









