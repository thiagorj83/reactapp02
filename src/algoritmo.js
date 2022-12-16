import React, { Component, useState } from 'react';
import { PalindromeChecker } from './palindromeChecker';
import { View, Text, Button, Alert, StyleSheet, clear } from 'react-native';
import { State, TextInput } from 'react-native-gesture-handler';



export function Algoritmo() {
    const styles = StyleSheet.create({

        textStyle: {
            margin: 10,
            alignSelf: 'center',
            textAlign: 'center'
        },
        titleStyle: {
            fontSize: 20,
            margin: 10,
            textAlign: 'center'
        },
    });

    return (
        <View style={{ flex: 1, color: 'black' }}>
            <Text style={styles.titleStyle}>
                Algoritmo verificador de palíndromos
            </Text>
            <Text style={{ color:'black',marginLeft: 20 }}>
                {`  class PalindromeChecker{`}
            </Text>
            <Text style={{ color:'black',marginLeft: 45 }}>
                {`isPalindrome (text){`}
            </Text>
            <Text style={{ color:'black',marginLeft: 60 }}>
                {` let original_text_strings=text.normalize('NFD')`}
            </Text>
            <Text style={{ color:'black',marginLeft: 70 }}>
                {`.replace(/[\\u0300-\\u036f]/g, "")`}
            </Text>
            <Text style={{ color:'black',marginLeft: 70 }}>
                {`.match(/[a-zA-Z]+/g)`}
            </Text>
            <Text style={{ color:'black',marginLeft: 70 }}>
                {`.join('').toLowerCase()`}
            </Text>
            <Text style={{ color:'black',marginLeft: 60 }}>
                {`let reversed_text_strings=original_text_strings`}
            </Text>
            <Text style={{ color:'black',marginLeft: 70 }}>
                {`.split('').reverse().join('') `}
            </Text>
            <Text style={{ color:'black',marginLeft: 60 }}>
                {`if (original_text_strings===reversed_text_strings){`}
            </Text>
            <Text style={{ color:'black',marginLeft: 75 }}>
                alert('\"'+ `${'text'}`+'\"' + ' é um palíndromo!')
            </Text>
            <Text style={{ color:'black',marginLeft: 60 }}>
                {` }else {`}
            </Text>
            <Text style={{ color:'black',marginLeft: 75 }}>
                alert('\"'+ `${'text'}`+'\"' +' não é um palíndromo!')
            </Text>
            <Text style={{ color:'black',marginLeft: 65 }}>
                {`}`}
            </Text>
            <Text style={{ color:'black',marginLeft: 45 }}>
                {`}`}
            </Text>
            <Text style={{ color:'black',marginLeft: 20 }}>
                {`}`}
            </Text>
        </View>
    );
}

