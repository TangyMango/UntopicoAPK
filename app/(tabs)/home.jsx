import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Images from '../../assets/images/Images';

const Index = () => {

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.HeadLogo}>

        <Text>Logo de Untopico Traido de Carpeta Assets, dentro de carpeta App</Text>
        <Image source={require('../assets/logo.png')} style={{ width: 50, height: 50 }}/>

        <Text>Logo de Google desde Folder local</Text>
        <Image source={require('./Google.png')} style={{ width: 50, height: 50 }}/>

        <Text>Logo de Untopico Traido de Carpeta Assets Original</Text>
        <Image source={Images.logo} style={{ width: 50, height: 50 }}/>

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
