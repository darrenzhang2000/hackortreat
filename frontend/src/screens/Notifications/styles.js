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
      padding:10,
      margin:20,
      width:250,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center'
    },
    text:{
      fontSize:17,
      color:'#000000',
      textAlign:'center',
      fontWeight:'bold',
      marginLeft:20
    },
    tt:{
      fontSize:16,
      color:'white',
      textAlign:'left'
    },
    nums:{
      backgroundColor:'#27AAB6',
      borderRadius:15,
      padding:10,
      margin:20,
      width:50,
      flexDirection:'row',
    },
    input: {
      height: 30,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#006666',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
      paddingRight:16,
      color:'white'
  },
  button:{
    backgroundColor:'#34F4F9',
    margin:10,
    paddingLeft:40,
    paddingRight:40,
    padding:10,
    borderRadius:10
  }
})
