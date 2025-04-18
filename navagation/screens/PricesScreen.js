import * as React from 'react';
import {View, Text} from 'react-native';

export default function PricesScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text 
            onPress={() => alert('This is the "Prices" Screen!!')}
            style={{fontSize: 26, fontWeight: 'bold'}}>
                Prices Screen
            </Text>
        </View>
    );
}