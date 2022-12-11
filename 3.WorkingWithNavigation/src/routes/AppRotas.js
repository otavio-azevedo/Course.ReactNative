import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import IconeHome from '../assets/home.svg';
import IconeCoracao from '../assets/coracao.svg';


//https://reactnavigation.org/docs/tab-based-navigation/
const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
                let Icone = IconeHome;

                if (route.name === 'Melhores Produtores') {
                    Icone = IconeCoracao;
                }

                return <Icone color={color}/>;
            },
            tabBarActiveTintColor: '#2A9F85',
            tabBarInactiveTintColor: '#C7C7C7',
            tabBarLabelStyle: { fontSize: 14, lineHeight: 16, fontWeight: 'bold' },
        })}>
            <Tab.Screen name="Home" component={ProdutorRotas} />
            <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
        </Tab.Navigator>
    </NavigationContainer >
}