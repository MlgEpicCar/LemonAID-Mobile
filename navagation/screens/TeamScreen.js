import * as React from 'react';
import {View, Text} from 'react-native';

export default function TeamScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            onPress={() => alert('This is the "Team" Screen!!')}
            style={{fontSize: 26, fontWeight: 'bold'}}>
                Team Screen
            </Text>
        </View>
    );
}