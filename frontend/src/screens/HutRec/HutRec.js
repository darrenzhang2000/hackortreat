import React, { useEffect, useState } from 'react'
import styles from './styles';
import { firebase } from '../../firebase/config';
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import Pie from 'react-native-pie'


const HutRec = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy goods with tokens</Text>

      <TouchableOpacity style={styles.qrContainer}>
      <MaterialCommunityIcons name="qrcode-scan" color="white" size={50} />
      <Text style={styles.text}>Generate QR code</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Apply for tokens</Text>

      <TouchableOpacity style={styles.qrContainer}
        onPress={() => props.navigation.navigate("TokenStore")}
      >
      <FontAwesome5 name="coins" size={50} color="black" />
      <Text style={styles.text}>Token Store</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Token received</Text>
      <Text style={styles.tt}>Token donations</Text>

      

    
    </View>
  )
}

export default HutRec
