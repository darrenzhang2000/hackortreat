import React, { useEffect, useState } from 'react'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


export default function RecOnboarding(props) {

  const [desc, setDesc] = useState('');
  const [cause, setCause] = useState('');
  const [sub, setSub] = useState('Charity'); 

  const handlePress = () => {
    //store on firebase
    props.navigation.navigate("Botnav")
    //navigate to next screen
  }

    return(
        <View style={styles.container}>
          <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
          <Text style={styles.title}>Setup your profile</Text>

          <View style={styles.btns}>
                    <TouchableOpacity
                        style={[styles.lbutton, sub==="Charity"? styles.dc:styles.lc]}
                        onPress={() => setSub("Charity")}
                        >
                        <Text style={styles.buttonTitle}>Charity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.rbutton, sub==="Charity"? styles.lc:styles.dc]}
                        onPress={() => setSub("Individual")}
                        >
                        <Text style={styles.buttonTitle}>Individual</Text>
                    </TouchableOpacity>
            </View>

            <Text style={styles.txt}>Introduce your organization</Text>
            <Text style={styles.tx}>It can be anything - your mission, values, plans, work ... etc.</Text>

            <TextInput
                    style={styles.input}
                    placeholder='Description'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDesc(text)}
                    value={desc}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    multiline={true}
                />

            <View style={styles.picker}>
              <DropDownPicker
                    items={[
                        {label: 'Child Welfare', value: 'uk', icon: () => <Icon name="smile" size={18} color="#900" />},
                        {label: 'Animal Welfare', value: 'france', icon: () => <Icon name="feather" size={18} color="#900" />},
                    ]}
                    defaultValue={cause}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#34F4F9'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: 'white'}}
                    onChangeItem={item => setCause(item.value)}
                />
            </View>

            <TouchableOpacity
                    style={styles.button}
                    onPress={handlePress()}
                >
                    <Text style={styles.buttonTitle}>Confirm</Text>
                </TouchableOpacity>
            
          </KeyboardAwareScrollView>
        </View>
    )
}
