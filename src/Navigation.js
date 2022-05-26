import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from './screens/DrawerContainer/DrawerContainer';
import Home from './screens/Home/Home';
import Settings from './screens/Settings/Settings';
import Wallet from './screens/Wallet/Wallet';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle:{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    alignSelf: 'center',
                    flex:1,
                }
            }}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Settings' component={Settings} />
                <Stack.Screen name='Wallet' component={Wallet} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return(
        <Drawer.Navigator
            drawerPosition='left'
            initialRouteName='Main'
            drawerStyle={{
                width:250
            }}
            screenOptions={{ headerShown: false }}
            drawerContent={({navigation}) => <DrawerContainer navigation= {navigation}/>}
        >
            <Drawer.Screen name='Main' component={MainNavigator} />
        </Drawer.Navigator>
    )
}

export default Navigation = () => {
    return(
        <NavigationContainer>
            <DrawerStack />
        </NavigationContainer>
    )
}