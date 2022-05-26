import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

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
        <View>
            <Text>
                Wallet Page
            </Text>
        </View>
    )
}