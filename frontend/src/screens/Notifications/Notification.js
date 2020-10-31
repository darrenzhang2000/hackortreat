import React, { useEffect, useState } from 'react'
import styles from './styles';
import { firebase } from '../../firebase/config';
import { View, Text, TextInput } from 'react-native'


const Notification = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
    </View>
  )
}

export default Notification
