import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import SerieCard from '../components/SerieCard';

import series from '../../series.json';

const isEven = number => {
    if (number % 2 == 0) {
        return true
    }
    return false
};

const SeriesPage = (props) => (
    <View style={styles.container}>
        <FlatList
            data={ series }
            renderItem={({ item, index }) => (
                <SerieCard 
                    serie={item}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => props.navigation.navigate('SerieDetail', {serie: item})}
                />
            )}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            ListHeaderComponent={ porps =>  <View style={styles.marginTop}></View>}
            ListFooterComponent={ porps =>  <View style={styles.marginBottom}></View>}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5
    },
    marginTop:{
        marginTop: 5
    },
    marginBottom: {
        marginBottom: 5
    }
})

export default SeriesPage;