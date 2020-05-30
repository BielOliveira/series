import React from 'react';
import { View, Text } from 'react-native';
import { exp } from 'react-native-reanimated';

export default class SerieDetailPage extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.serie.title}</Text>
            </View>
        );
    }
}