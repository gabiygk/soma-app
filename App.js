import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from "./pages/home";
import teo from "./pages/teo";
import geo from "./pages/geo";
import alge from "./pages/alge";
import prof from "./pages/prof";
import comb from "./pages/comb";
import torn from "./pages/torn";
import cal from "./pages/cal";
import foru from "./pages/foru";
import event from "./pages/event";


const Stack = createNativeStackNavigator(); // constante para implementar a navegacao entre telas do tipo stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen 
        name="home" 
        component={home}
        options={{ headerShown: false }} 
         />

        <Stack.Screen name="prof" 
        component={prof} 
         options={{ title: 'Seu perfil' }} 
         />
         
        <Stack.Screen name="teo" 
        component={teo} 
        options={{ title: 'Teoria dos Números' }} 
        />

         <Stack.Screen name="geo" 
        component={geo} 
        options={{ title: 'Geometria' }}
        />

         <Stack.Screen name="alge" 
        component={alge} 
        options={{ title: 'Álgebra' }}
        />

         <Stack.Screen name="comb" 
        component={comb} 
        options={{ title: 'Combinatória' }}
        />

        <Stack.Screen name="torn" 
        component={torn} 
        options={{ title:'Torneios'}} 
        />

        <Stack.Screen name="cal" 
        component={cal} 
        options={{ title: 'Calendário' }} 
        />

        <Stack.Screen name="event" 
        component={event} 
        options={{ title: 'Eventos' }} 
        />

        <Stack.Screen name="foru" 
        component={foru} 
        options={{ headerShown: false }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

