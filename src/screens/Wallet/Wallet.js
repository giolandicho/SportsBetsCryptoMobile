import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Wallet = (props) => {
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
            <Text style={styles.text}>
                Wallet Page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex:1,
    },
    text:{
        color:'white',
    }
})