import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 20,
      fontWeight: 600,
      marginTop: 5
    },
    subt: {
      padding: 30,
      fontSize: 15,
      fontWeight: 400,
      marginBottom: 10,
      alignItems: "center"
    },
    //textitem{},
    botao: {
      padding: 20,
      backgroundColor: "#b9e4ed",
      borderRadius: 15
    },
    botaoText: {
      color: "black",
      fontWeight: 600
    },
        mapa: {
          width: "70%",
          height: "50%",
        },

        list1:{
    backgroundColor: 'pink',
    marginTop: 20,
    padding: 10,
    borderRadius: 12,
   // flex: 6,
    flexDirection: 'center'
      },

      listaItem: {
        backgroundColor: '#b9e4ed',
        marginTop: 20,
        padding: 10,
        borderRadius: 12,
        flex: 1,
        flexDirection: 'row',
        width: 350,
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
        backgroundColor: '#b9e4ed',
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