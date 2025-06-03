import { Button, StyleSheet,FlatList, Text, View, TouchableOpacity,Modal, Image } from 'react-native';
import styles from '../styles';
import { useState } from 'react';

export default function Inicio() {
    const [ModalVisible, setModalVisible] = useState(false);
    const [descricao, setDescricao] = useState("");

    const roupa1 = [
        
        {id:1,
         nome: "Casaquinho",
         descricao: "O casaquinho de lã serve em bebês de 1 a 4 meses",
         imagem: require ("../assets/roupa.jpg"),
         valor: "R$149,90"
        }]
        
const roupa2 = [
        {  id:2,
            nome: "Conjuntinho",
            descricao: "kgkfd",
            imagem: require ("../assets/conjunto.jpg"),
            valor: "R$249,90"
        },
    ]

    const criaItem = ({item}) =>
        <TouchableOpacity 
          style={styles.listaItem}
          onPress={() => {
            setModalVisible(true);
            setDescricao(item.descricao);
          }}
        >
          { <Image 
            source={item.imagem} 
            style={styles.listaImagem} 
          /> }

          <View>
            <Text>Nome da peça: {item.nome}   </Text>
            <Text>Valor:  {item.valor} </Text>

            

          </View>
        </TouchableOpacity>

         return (
            <View style={styles.list1}>
              <Text>Roupas disponíveis</Text>
        
              <FlatList
                data={roupa1}
                renderItem={criaItem}
                keyExtractor={item => item.id}
              />
              
              <Modal
                visible={ModalVisible}
                transparent={true}
                animationType='slide'
              >
                <View style={styles.modalcontainer}>
                  <View style={styles.modal}>
                    <Text style={styles.modalTitulo}>Descrição</Text>
                    <Text style={styles.modalText}> {descricao} </Text>
                    <Button title="Fechar" onPress={() => setModalVisible(false)} />
                  </View>
                </View>
                
              </Modal>
         
         <View style={styles.list2}>
              <FlatList
                data={roupa2}
                renderItem={criaItem}
                keyExtractor={item => item.id}
              />
              
              <Modal
                visible={ModalVisible}
                transparent={true}
                animationType='slide'
              >
                <View style={styles.modalcontainer}>
                  <View style={styles.modal}>
                    <Text style={styles.modalTitulo}>Descrição</Text>
                    <Text style={styles.modalText}> {descricao} </Text>
                    <Button title="Fechar" onPress={() => setModalVisible(false)} />
                  </View>

                  </View>
                  </Modal>
         </View>
            </View>
          );
     
         <View style={styles.container}>
             <Text style={styles.titulo}>Seja bem vindo!!</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("roupas")} >
                 <Text style={styles.botaoText}>Início</Text>
             </TouchableOpacity> 
        </View>
     
}