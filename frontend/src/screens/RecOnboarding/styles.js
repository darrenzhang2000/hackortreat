import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#14171A',
        padding:20,
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    lbutton: {
      backgroundColor: '#34F4F9',
      marginLeft: 15,
      marginTop: 20,
      height: 42,
      padding: 10,
      alignItems: "center",
      justifyContent: 'center'
  },
  rbutton: {
      backgroundColor: '#006666',
      marginRight: 15,
      marginTop: 20,
      height: 42,
      padding: 10,
      alignItems: "center",
      justifyContent: 'center',

  },
  input: {
      height: 200,
      borderRadius: 30,
      overflow: 'hidden',
      backgroundColor: '#006666',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingLeft: 16,
      color:'white'
  },
  button: {
      backgroundColor: '#34F4F9',
      marginLeft: 40,
      marginRight: 40,
      marginTop: 20,
      height: 48,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: 'center'
  },
  title:{
    fontSize:18,
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    marginTop:20
  },
  txt:{
    color:'white',
    textAlign:'center',
    fontSize:16,
    margin:10
  },
  tx:{
    color:'white',
    textAlign:'center'
  },
  picker:{
    height:150,
    marginLeft:30,
    marginRight:30,
    marginTop:40
  },
  lc:{
    backgroundColor:"#006666"
},
dc:{
    backgroundColor:"#34F4F9"
}
})