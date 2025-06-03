import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c5e1a5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 20
    },
    botao: {
      padding: 20,
      backgroundColor: "#689f38",
      borderRadius: 15
    },
    botaoText: {
      color: "#c5e1a5",
      fontWeight: 600
    },
        mapa: {
          width: "90%",
          height: "60%"
        },

        list:{
    backgroundColor: '#b9e4ed',
    marginTop: 20,
    padding: 10,
    borderRadius: 12,
   // flex: 6,
    flexDirection: 'center'
      },
          


      listaItem: {
        backgroundColor: '#b9e4ed',
        marginTop: 20,
       // margin: 50,
        padding: 10,
        borderRadius: 12,
        flex: 1,
        flexDirection: 'column'
      },
      listaImagem: {
        width: 50,
        height: 50,
        marginRight: 10,
       // margin: 50,
      },
      modalcontainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "10%",
        width: "80%",
      },
      modal: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
        width: "80%",
        borderRadius: 10,
        padding: 20,
        elevation: 20,
        borderWidth: 0.3,
      },
      modalText: {
        marginBottom: 10,
        textAlign: 'justify'
      },
      });
  
  export default styles;