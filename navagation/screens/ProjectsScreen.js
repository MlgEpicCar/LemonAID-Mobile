import * as React from 'react';
import {View, Text} from 'react-native';

export default function ProjectsScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            onPress={() => alert('This is the "Projects" Screen!!')}
            style={{fontSize: 26, fontWeight: 'bold'}}>
                Projects Screen
            </Text>
        </View>
    );
}