import React, { useEffect, useRef, useState} from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
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
        <View>
            <Text>
                Home Page
            </Text>
        </View>
    )
}