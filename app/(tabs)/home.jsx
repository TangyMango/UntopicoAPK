import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const Index = () => {

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.HeadLogo}>
        <Text>Hola Mundo</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  HeadLogo: {
    width: '100%',
    marginTop: 20,
  },
});

export default Index;
