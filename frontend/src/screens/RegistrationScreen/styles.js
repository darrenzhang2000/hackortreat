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
    lbutton: {
        backgroundColor: '#006666',
        marginLeft: 15,
        marginTop: 20,
        height: 42,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    rbutton: {
        backgroundColor: '#34F4F9',
        marginRight: 15,
        marginTop: 20,
        height: 42,
        padding: 10,
        alignItems: "center",
        justifyContent: 'center',

    },
    logo: {
        flex: 1,
        height: 180,
        width: 180,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
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
    buttonTitle: {
        color: '#000000',
        fontSize: 16,
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    txt:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        marginTop:20
    },
    bttn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    lc:{
        backgroundColor:"#006666"
    },
    dc:{
        backgroundColor:"#34F4F9"
    }
})
