import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Inicio() {

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Seja bem vindo!!</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Pedido")} >
                <Text style={styles.botaoText}>Início</Text>
            </TouchableOpacity> 
        </View>
    )
}