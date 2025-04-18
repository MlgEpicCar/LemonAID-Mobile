import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import PricesScreen from './screens/PricesScreen';
import TeamScreen from './screens/TeamScreen';
import AccountScreen from './screens/AccountScreen';

// Screen names
const homeName = 'Home';
const projectsName = 'Projects';
const pricesName = 'Prices';
const teamName = 'Team';
const AccountName = 'Account';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcons: ({focused, color, size}) => {
                        let iconName;
                        let rn= route.name;
                        
                        if (rn == homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}

                <Tab.Screen name={homeName} component={HomeScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}