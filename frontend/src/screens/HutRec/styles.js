import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#14171A',
        padding:20
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    title:{
      fontSize:20,
      color:'white',
      textAlign:'center',
      fontWeight:'bold'
    },
    qrContainer:{
      backgroundColor:'#27AAB6',
      borderRadius:15,
      padding:20,
      margin:20,
      width:250,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    text:{
      fontSize:17,
      color:'#000000',
      textAlign:'center',
      fontWeight:'bold'
    },
    tt:{
      fontSize:16,
      color:'white',
      textAlign:'left'
    }
})
