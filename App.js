import {Text, View } from 'react-native';

import styles from './styles';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import Endereco from "./screens/Endereco";
import Favoritos from "./screens/Favoritos";
import Meuperfil from "./screens/Meuperfil";
import Informacao from "./screens/Informacao";
import Inicio from "./screens/Inicio";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator screenOptions = {{
      tabBarActiveTintColor: "#FF69B4",
      tabBarActiveBackgroundColor: "pink",
      //tabBarShowLabel:false //tirar o texto
      tabBarLabelStyle:{ fontSize: 12, fontWeight:900}
    }}>
      <Tab.Screen name = "Início"  component={Inicio}
      options={{tabBarIcon: () => <Icon name = "home" size={20} />}}
      />

      <Tab.Screen name = "Favoritos"  component={Favoritos}
       options={{tabBarIcon: () => <Icon name = "heart"/>}}
     />

      <Tab.Screen name = "Endereço"  component={Endereco}
       options={{tabBarIcon: () => <Icon name = "female"/>,
        tabBarBadge: 2, //npotificacao
        tabBarBadgeStyle: {backgroundColor: "#FF69B4", color: "white"}
       }}
       />
       <Tab.Screen name = "Informação"  component={Informacao}
       options={{tabBarIcon: () => <Icon name = "female"/>,
        tabBarBadge: 2, //npotificacao
        tabBarBadgeStyle: {backgroundColor: "#FF69B4", color: "white"}
       }}/>
       <Tab.Screen name = "Meu Perfil"  component={Meuperfil}
       options={{tabBarIcon: () => <Icon name = "female"/>,
        tabBarBadge: 2, //npotificacao
        tabBarBadgeStyle: {backgroundColor: "#FF69B4", color: "white"}
       }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}




