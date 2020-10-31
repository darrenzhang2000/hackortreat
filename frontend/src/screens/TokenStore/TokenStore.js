import React, { useEffect, useState } from 'react'
import styles from './styles';
import { firebase } from '../../firebase/config';
import { View, Text, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const TokenStore = (props) => {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Token Store</Text>
      <Text style={styles.tt}>Please only apply for the amount you need</Text>

      <TouchableOpacity style={styles.qrContainer}>
      <MaterialCommunityIcons name="food" color="white" size={40} />
      <Text style={styles.text}>Food Token</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.qrContainer}>
      <MaterialCommunityIcons name="home" color="white" size={40} />
      <Text style={styles.text}>Household Token</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.qrContainer}>
      <MaterialCommunityIcons name="baby-face" color="white" size={40} />
      <Text style={styles.text}>Baby Token</Text>
      </TouchableOpacity>

      <Text style={styles.tt}>Quantity of tokens</Text>

          <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Input quantity'
                    onChangeText={(text) => setCount(text)}
                    value={count}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType="number-pad"
                />

          <TouchableOpacity style={styles.button}>
            <Text>Apply</Text>
          </TouchableOpacity>
    
    </View>
  )
}

export default TokenStore
