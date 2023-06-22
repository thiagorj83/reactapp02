import React, { Component, useState } from 'react';
import { PalindromeChecker } from './palindromeChecker';
import { View, Text, Button, Alert, StyleSheet, clear } from 'react-native';
import { State, TextInput } from 'react-native-gesture-handler';




export function Conceito() {
    
const styles = StyleSheet.create({

    titleStyle: {
      fontSize: 20,
      margin: 10,
      textAlign:'center'
    },
  });
  
    return (
      <View style={{ flex: 1}}>
        <Text style={styles.titleStyle}>
                Conceito de palíndromo
        </Text>
        <Text style={{ color:'black', marginLeft: 20}}> 
        {` Palíndromo é uma palavra, frase ou número que perma-`}
        </Text>
        <Text style={{color:'black', marginLeft: 5}}>
        {`nece igual quando lida de trás para diante.`}
        </Text>
        <Text style={{color:'black',marginLeft:20}}>
            {`Por extensão, palíndromo é qualquer série de elementos `}
        </Text>
        <Text style={{color:'black', marginLeft: 5}}>
            {`com simetria linear, ou seja, que apresenta a mesma se-`}
        </Text>
        <Text style={{ color:'black',marginLeft: 5}}>
            {`quência de unidades nos dois sentidos.`}
        </Text>
        <Text style={{ color:'black',marginLeft: 5}}>
            {`\n\nExemplos:`}
        </Text>
        <Text style={{ color:'black',marginLeft: 20}}>
            {`\nArara, asa, ovo, 'Amor a Roma', 'A grama é amarga', `}
        </Text>
        <Text style={{color:'black', marginLeft: 5}}>
            {`anilina, esse, racificar, socos, sopapos,'Luz azul', `}
        </Text>
        <Text style={{ color:'black',marginLeft: 5}}>
            {`'O mito é ótimo', 'O lobo ama o bolo', ... `}
        </Text>
        <Text style={{ color:'black',marginLeft: 5}}>
            {`Luza Rocelina, a namorada do Manuel, leu na moda da romana: "anil é cor azul"... `}
        </Text>
      </View>
    );
  }