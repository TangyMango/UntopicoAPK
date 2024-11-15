import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importa GestureHandlerRootView

export default function TabLayout() {
  const iconSize = 30; // Tamaño global para los íconos
  const labelSize = 12; // Tamaño global para el texto

  return (
    // Envuelve con GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Envuelve las Tabs con el proveedor del contexto */}
        <Tabs
          initialRouteName="home" // Define la pantalla inicial
          screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarLabelStyle: {
              fontSize: labelSize, // Ajusta el tamaño del texto aquí
            },
          }}
        >
          {/* Pestaña de inicio (Home) */}
          <Tabs.Screen
            name="home"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="home" color={color} />,
              headerShown: false,
            }}
          />
        </Tabs>
    </GestureHandlerRootView>
  );
}