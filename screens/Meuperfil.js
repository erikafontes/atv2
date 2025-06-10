import { Button, StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import styles from '../styles';
import {useState} from 'react'
export default function Meuperfil() {

  const [nome,  setNome]  = useState('');
  const [endereco, setEndereco] = useState('');
  const [fone,  setFone]  = useState('');
    return(
           
        <View style={styles.container}>
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Text style={styles.subt}>Insira seus dados abaixo:</Text>
      <TextInput placeholder="Nome"  
        style={styles.input} 
        autoCapitalize="words" //characters
        onChangeText={nome => setNome(nome)}
      />
      <TextInput placeholder="Telefone" 
        style={styles.input}
        inputMode="numeric"
        onChangeText={fone => setFone(fone)}
      />

        <TextInput placeholder= "Endereço"
        style={styles.input}
        inputMode="endereco"
        onChangeText={endereco => setEndereco(endereco)}
      />

      
      <Button title="Salvar" 
        onPress={
          () => alert("Seus dados foram salvos! \n\n" + nome + "\n" + endereco + "\n" + fone )
        }
        />

        </View>
    );
}