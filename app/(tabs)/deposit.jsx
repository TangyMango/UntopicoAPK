import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import Card1 from '../components/card1';
import HeadLogo from '../components/headLogo';

const deposit = () => {
  const [monto, setMonto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const selectedCard = {
    id: '1',
    balance: 0,
    number: '-',
    name: 'Nombre Tarjeta'
  };

  const handleDeposito = async () => {
    if (!monto || isNaN(monto) || parseFloat(monto) <= 0) {
      Alert.alert('Error', 'Por favor ingresa un monto válido.');
      return;
    }

    // Simulación de autenticación
    Alert.alert('Éxito', 'El depósito se ha realizado con éxito.');
  };

  const handlePasswordSubmit = () => {
    setIsPasswordModalVisible(false);
    setPasswordInput('');
    handleDeposito();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <HeadLogo />

        <View style={styles.card1}>
          <Card1 datos={selectedCard} />
        </View>

        <Text style={styles.title}>Depositar</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese el monto"
          placeholderTextColor="#707070"
          value={monto}
          onChangeText={(text) => setMonto(text)}
          keyboardType="numeric"
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descripción breve (opcional)"
          placeholderTextColor="#707070"
          value={descripcion}
          onChangeText={(text) => setDescripcion(text)}
          multiline
          numberOfLines={3}
        />

        <TouchableOpacity style={styles.button} onPress={handleDeposito} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Procesando...' : 'Depositar'}</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  card1: {
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4FD290',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalInput: {
    height: 50,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    backgroundColor: '#4FD290',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#cccccc',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default deposit;