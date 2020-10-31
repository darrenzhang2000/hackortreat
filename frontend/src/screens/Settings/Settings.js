import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import Item from "./Item";

const Settings = () => {

    const DATA = [
        {
            title: 'My account',
            content: 'Acount details and profile'
        },
        {
            title: 'Security',
            content: 'Security options & controls'
        },
        {
            title: 'Privacy',
            content: 'Information collected & usage'
        },
        {
            title: 'Communication',
            content: 'Emails, invites and notifications'
        },
        {
            title: 'Help & Support',
            content: 'FAQ & help desk'
        }, {
            title: 'Log out',
            content: 'Log out of your account'
        },

    ]


    const renderItem = ({ item }) => (
        <Item  title={item.title} content={item.content} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />



        </View>
    )
}

export default Settings;