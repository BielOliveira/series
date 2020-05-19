import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

import FormRow from '../components/FormRow'

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    onChangeRender(field, value) {
        this.setState({ [field]: value })
    }
    tryLogin() {
        console.log(this.state);
    }
    render(){
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput 
                        style={styles.input}
                        placeholder='exemplo@user.com'
                        value={this.state.email}
                        onChangeText={value => this.onChangeRender('email', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        style={styles.input}
                        placeholder='******'
                       secureTextEntry
                       value={this.state.password}
                       onChangeText={value => this.onChangeRender('password', value)}
                    />
                </FormRow>
                <Button 
                    title="Entrar"
                    onPress={() => this.tryLogin()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: 10,
        paddingRight: 10
    },
    input:{
        paddingLeft: 5,
        paddingRight: 5,
    }
})