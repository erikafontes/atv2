import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useState } from 'react';

export default function Endereco() {
    const [local,setLocal]=useState ({
        latitude: -31.3291509,
            longitude: -54.10779
    })

    return(
      <View style={styles.container}>
        {/* <Text style= {styles.titulo}>Nosso Endereço</Text> */}
        <MapView
        style= {styles.mapa}
        initialRegion={{
          latitude: -31.329668841647777,
          longitude: -54.10583583026085,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        mapType=  'satellite'//'terrain' //'satellite'
        onPress={
          ponto => {
            setLocal({
              ...local,
              latitude: ponto.nativeEvent.coordinate.latitude,
              longitude: ponto.nativeEvent.coordinate.longitude
            });
         }
      }
        >
          <Marker 
          coordinate = {local}
          />
          
          <Marker
         coordinate={{
          latitude: -31.329668841647777,
          longitude:-54.10583583026085
         }}
         title='B.F Ateliê'
         description='Busque suas encomendas aqui!'
        />
        </MapView>
      </View>
    
  )};