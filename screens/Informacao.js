import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Informacao() {

    return(
        <View style={styles.container}>
            {/* <Text style={styles.titulo}>Seja bem vindo!!</Text> */}
          <Text style={styles.titulo}>Informações Extras</Text>
          <Text style={styles.subt}>Todas as peças são feitas à mão, com lã anti-alérgica para proteger a criança. </Text>
        </View>
    )
}