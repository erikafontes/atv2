import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Meuperfil() {

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Seja bem vindo!!</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Pedido")} >
                <Text style={styles.botaoText}>Meu Perfil</Text>
            </TouchableOpacity> 
        </View>
    )
}