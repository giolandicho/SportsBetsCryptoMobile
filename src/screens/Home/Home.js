import React, { useEffect, useRef, useState} from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import ScrollHeader from '../../components/ScrollHeader/ScrollHeader';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

export default Home = (props) => {
    const { navigation } = props;
    useEffect(()=> {
        navigation.setOptions({
            headerLeft: () => (
                <MenuIcon onPress={()=>{
                    navigation.openDrawer();
                }} />
            ),
            headerRight: () => <View />
        });
    }, []);
    
    return(
        <View style={styles.container}>
            <ScrollHeader />
            <View style={styles.content}>
                <Text style={styles.text}>
                    Home Page
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex:1,
    },
    content:{
        flex:50,
    },
    text:{
        color:'white',
    }
})