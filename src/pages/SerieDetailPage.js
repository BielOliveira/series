import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class SerieDetailPage extends React.Component {
    render() {
        const serie = {
            "id": 3,
            "title": "Todo mundo odeia o Chris",
            "gender": "Comédia",
            "rate": 100,
            "img":
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NTg4MTc5OF5BMl5BanBnXkFtZTcwMzc2MzYzMQ@@._V1_.jpg",
            "description":
                "Everybody Hates Chris (Todo Mundo Odeia o Chris (título no Brasil) ou Todos Contra o Chris (título em Portugal)) é uma série de televisão estadunidense de comédia dramática inspirado nas experiências pessoais de Chris Rock no bairro de Bed-Stuy, em Nova Iorque, seguindo um estilo muito parecido com a série Anos Incríveis."
        }
        return (
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: serie.img
                    }}
                />
                {/* <Text>{this.props.navigation.state.params.serie.title}</Text> */}
                <Text>{serie.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        aspectRatio: 1
    }
})