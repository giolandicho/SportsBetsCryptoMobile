import React, { useEffect } from 'react';
import { View } from 'react-native';
import MenuIcon from '../../components/MenuIcon/MenuIcon';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Featured from '../Content/Sports/Featured';
import NBA from '../Content/Sports/NBA';
import NFL from '../Content/Sports/NFL';
import MLB from '../Content/Sports/MLB';
import Soccer from '../Content/Sports/Soccer';
import NHL from '../Content/Sports/NHL';
import Boxing from '../Content/Sports/Boxing';
import MMA from '../Content/Sports/MMA';
import NASCAR from '../Content/Sports/NASCAR';

const Tab = createMaterialTopTabNavigator();

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
        
            <Tab.Navigator 
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarItemStyle:{
                        width:'auto'
                    },
                    tabBarStyle:{
                        backgroundColor:'black'
                    },
                    tabBarLabelStyle:{
                        color:'white',
                        fontSize:15,
                    },
                    tabBarContentContainerStyle:{
                        height:'auto',
                        width:'auto',
                    },
                }}
            >
                <Tab.Screen name='FEATURED' component={Featured}/>
                <Tab.Screen name='NBA' component={NBA}/>
                <Tab.Screen name='NFL' component={NFL}/>
                <Tab.Screen name='MLB' component={MLB}/>
                <Tab.Screen name='SOCCER' component={Soccer}/>
                <Tab.Screen name='NHL' component={NHL}/>
                <Tab.Screen name='BOXING' component={Boxing}/>
                <Tab.Screen name='MMA' component={MMA}/>
                <Tab.Screen name='NASCAR' component={NASCAR}/>
            </Tab.Navigator>
    )
}