import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Inicio (){
  
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  
});

