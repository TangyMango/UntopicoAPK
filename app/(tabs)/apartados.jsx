import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';

const apartados = () => {
  const [balance, setBalance] = useState(0); // Ejemplo de saldo inicial
  const [apartados, setApartados] = useState([]);
  const [nuevoApartado, setNuevoApartado] = useState('');
  const [montoApartado, setMontoApartado] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [amountToWithdraw, setAmountToWithdraw] = useState('');
  const [selectedApartado, setSelectedApartado] = useState(null);

  const placeholderColor = "black";

  const retirarDinero = () => {
    // Lógica de retiro simplificada
    const montoRetirar = parseFloat(amountToWithdraw);
    if (montoRetirar > 0 && montoRetirar <= selectedApartado.monto) {
      alert('Dinero retirado con éxito');
      setModalVisible(false);
    } else {
      alert('Monto inválido');
    }
  };

  const eliminarApartado = (apartado) => {
    // Lógica de eliminación simplificada
    alert('Apartado eliminado');
    setApartados(apartados.filter((item) => item.id !== apartado.id));
  };

  const crearApartado = () => {
    const monto = parseFloat(montoApartado);
    if (nuevoApartado && monto > 0 && balance >= monto) {
      const newApartado = { 
        id: Date.now().toString(), 
        nombre: nuevoApartado, 
        monto: monto 
      };
      setApartados([...apartados, newApartado]);
      setNuevoApartado('');
      setMontoApartado('');
    } else {
      alert('Monto inválido o insuficiente balance');
    }
  };

  const getTotalDisponible = () => {
    const totalApartados = apartados.reduce((acc, item) => acc + item.monto, 0);
    return balance + totalApartados;
  };

  const handleRetirarClick = (item) => {
    setSelectedApartado(item);
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.topContent}>
          <View style={styles.saldoContainer}>
            <Text style={styles.title}>Saldo de la Tarjeta</Text>
            <Text style={styles.balance}>${balance}</Text>
          </View>

          <View style={styles.apartadoForm}>
            <TextInput
              style={styles.input}
              placeholder="Nombre del Apartado"
              value={nuevoApartado}
              onChangeText={setNuevoApartado}
              placeholderTextColor={placeholderColor}
            />
            <TextInput
              style={styles.input}
              placeholder="Monto"
              value={montoApartado}
              onChangeText={setMontoApartado}
              keyboardType="numeric"
              placeholderTextColor={placeholderColor}
            />
            <TouchableOpacity style={styles.button} onPress={crearApartado}>
              <Text style={styles.buttonText}>Crear Apartado</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.subtitle}>Apartados</Text>

        <FlatList
          data={apartados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.apartadoItem}>
              <Text style={styles.apartadoText}>{item.nombre}: ${item.monto}</Text>

              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.buttonWithdraw}
                  onPress={() => handleRetirarClick(item)}>
                  <Text style={styles.buttonText}>Retirar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => eliminarApartado(item)}>
                  <Text style={styles.buttonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
          keyboardShouldPersistTaps="handled"
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Disponible: ${getTotalDisponible()}</Text>
        </View>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Retirar Dinero</Text>
              <TextInput
                style={styles.input}
                placeholder="Monto a retirar"
                value={amountToWithdraw}
                onChangeText={setAmountToWithdraw}
                keyboardType="numeric"
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.button} onPress={retirarDinero}>
                  <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    topContent: {
      alignItems: 'center', // Esto solo afecta los elementos superiores
      width: '100%',
    },
    saldoContainer: {
      marginTop: 35,
      borderRadius: 10,
      backgroundColor: '#4fd290',
      padding: 12,
      width: '90%',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    balance: {
      fontSize: 24,
      color: 'black',
      textAlign: 'center',
    },
    loading: {
      fontSize: 18,
      color: '#999',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    apartadoForm: {
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    totalContainer: {
      marginTop: 30,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      alignItems: 'center',
    },
    totalText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: '80%',
      height: 45,
      marginBottom: 10,
      paddingLeft: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    apartadoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      marginBottom: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
    },
    apartadoText: {
      fontSize: 16,
    },
    actionButtons: {
      flexDirection: 'row',
    },
    buttonWithdraw: {
      backgroundColor: '#28a745',
      marginRight: 10,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    buttonDelete: {
      backgroundColor: '#dc3545',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    flatListContent: {
      paddingBottom: 50,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  
  export default apartados;  