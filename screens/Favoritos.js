import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { NavigationContainer } from '@react-navigation/native';
export default function Favoritos({navigation}) {

    return(
        <View style={styles.container}>
            {/* <Text style={styles.titulo}> Favoritos </Text> */}
            <Text style={styles.subt}> Você ainda não tem itens favoritos :( </Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Início")} >
                <Text style={styles.botaoText}>Buscar itens</Text>
            </TouchableOpacity> 
        </View>
    )
}