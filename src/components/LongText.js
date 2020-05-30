import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Line = ({label = "", content = ""}) => {
    // const {label, content} = props;
    return (
            <View style={ styles.line }>
                <Text style={[ 
                    styles.cell, 
                    styles.label, 
                    ]}>{ label }</Text>
                <Text style={[ styles.cell, styles.content ]}>{ content }</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    line:{
        paddingTop: 3,
        paddingBottom: 3,
    },
    cell:{
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5
    },
    label:{
        fontWeight: 'bold',
        flex:1,
        textDecorationLine: 'underline'
    },
    content:{
        flex: 3,
        textAlign: 'justify' //IOS ONLY
    },
})

export default Line