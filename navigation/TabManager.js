import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProjectsScreen from '../screens/ProjectsScreen';
import PricesScreen from '../screens/PricesScreen';
import HomeScreen from '../screens/HomeScreen';
import TeamScreen from '../screens/TeamScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const TabManager = () => {
    return (
        
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopColor: '#ffe761',
                    position: 'absolute',
                    backgroundColor: '#ffe761',
                    height: 100,
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    paddingTop: 15,
                    textAlign: 'center',
                    color: '#e9b424',
                    fontWeight: 'bold',
                    fontSize: 13,
                }
            }}
            
        >
            <Tab.Screen name="Projects" component={ProjectsScreen} options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{
                            paddingTop: 10,
                        }}>
                            <Image
                                source={require('../assets/navbar/projects.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                    tintColor: '#e9b424',
                                }}
                            />
                        </View>
                    ),
            }} />
            <Tab.Screen name="Prices" component={PricesScreen} options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{
                            paddingTop: 10,
                        }}>
                            <Image
                                source={require('../assets/navbar/prices.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                    tintColor: '#e9b424',
                                }}
                            />
                        </View>
                    ),
            }} />
            <Tab.Screen name="Home" component={HomeScreen} options= {{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image
                                source={require('../assets/navbar/LemonLogo.png')}
                                style={{
                                    width: 70,
                                    height: 70,
                                }}
                            />
                        </View>
                    ),
            }} />
            <Tab.Screen name="Team" component={TeamScreen} options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{
                            paddingTop: 10,
                        }}>
                            <Image
                                source={require('../assets/navbar/team.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                    tintColor: '#e9b424',
                                }}
                            />
                        </View>
                    ),
            }} />
            <Tab.Screen name="Account" component={AccountScreen} options= {{
                    tabBarIcon: ({focused}) => (
                        <View style={{
                            paddingTop: 10,
                        }}>
                            <Image
                                source={require('../assets/navbar/account.png')}
                                style={{
                                    width: 40,
                                    height: 40,
                                    tintColor: '#e9b424',
                                }}
                            />
                        </View>
                    ),
            }} />
        </Tab.Navigator>
    );
}

export default TabManager;