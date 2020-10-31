import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { firebase } from "../../firebase/config"

const Item = (props) => {

    const action = () => {
        console.log("tapped")
        if(props.title == 'Log out'){
            console.log("here")
            firebase.auth().signOut();
            props.navigation.navigate("Login")
        }
    }

    return (
        <TouchableOpacity style={styles.item} onPress={action}>
            <View style={styles.textBlock}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.content}>
                    {props.content}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        margin: 18
    },
    textBlock: {
        flexDirection: 'column',
        margin: 18
    },
    title: {
        fontSize: 19,
        fontWeight: '800',
        color:'white'
    },
    content: {
        fontSize: 16,
        color: '#8E8E8E'
    }
})

export default Item;
