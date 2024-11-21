import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons'
import HeadLogo from '../components/headLogo';

const { width } = Dimensions.get('window');

const Index = () => {
  const router = useRouter();

  function handleDepositar() {
    //router.push('/deposit');
  }
  
  function handleGenerarQR() {
    //router.push('/deposit');
  }

  function handleTransferir() { 
    router.push('/transfer');
  }

  function handleRetirar() {
    router.push('/withdraw');
  }

  function handleScanearQR() {
    //router.push('/deposit');
  }

  function handleReportes() {
    router.push('/reportes');
  }

  function handleServicios() {
    //router.push('/servicios');
  }

  function handleCards() {
    router.push('/cards');
  }

  function handleApartados() {
    router.push('/apartados');
  }

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.HeadLogo}>
        <HeadLogo />
      </View>


      <View style={styles.UserCards}>
        
      </View>

      <TouchableOpacity style={styles.buttonApartados} onPress={handleApartados}>
        <Text style={styles.buttonTextApartados}>Apartados</Text>
      </TouchableOpacity>

      <View style={styles.Buttoncontainer}>

        <TouchableOpacity style={styles.button} onPress={handleCards}>
          <IconM name="credit-card" size={40} color="#900" />
          <Text style={styles.buttonText}>Mis tarjetas</Text>
        </TouchableOpacity>

        {/* Botón de Depositar */}
        <TouchableOpacity style={styles.button} onPress={handleDepositar}>
          <Icon name="download" size={40} color="#900" />
          <Text style={styles.buttonText}>Depositar</Text>
        </TouchableOpacity>

        {/* Botón de Transferir */}
        <TouchableOpacity style={styles.button} onPress={handleTransferir}>
          <Icon name="money" size={40} color="#900" />
          <Text style={styles.buttonText}>Transferir</Text>
        </TouchableOpacity>

        {/* Botón de Retirar */}
        <TouchableOpacity style={styles.button} onPress={handleRetirar}>
          <Icon name="share-square-o" size={40} color="#900" />
          <Text style={styles.buttonText}>Retirar</Text>
        </TouchableOpacity>

        {/* Botón de Reportes */}
        <TouchableOpacity style={styles.button} onPress={handleReportes}>
          <Icon name="file-text-o" size={40} color="#900" />
          <Text style={styles.buttonText}>Reportes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleGenerarQR}>
          <Icon name="qrcode" size={40} color="#900" />
          <Text style={styles.buttonText}>Deposito por QR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleScanearQR}>
          <IconM name="qr-code-scanner" size={40} color="#900" />
          <Text style={styles.buttonText}>Escanear QR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleServicios}>
          <IconM name="list-alt" size={40} color="#900" />
          <Text style={styles.buttonText}>Servicios</Text>
        </TouchableOpacity>

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

  Buttoncontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: width * 0.9, // Usa un porcentaje del ancho de la pantalla
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'white', // Color de fondo del botón
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.8)', // Reemplazo de shadow*
    elevation: 5, // Solo necesario para Android
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginTop: 25,
  },
  buttonApartados: {
    width: '90%',
    height: 40,
    backgroundColor: '#4fd290', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 5,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.8)', // Sustituto para sombras
    elevation: 5, // Necesario en Android
  },  
  buttonTextApartados: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Index;