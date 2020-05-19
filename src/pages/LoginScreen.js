import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import FormRow from '../components/FormRow'

export default class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    // onChangeMail(value){
    //     this.setState({
    //         email: value
    //     })
    // }
    // onChangePasswd(value){
    //     this.setState({
    //         password: value
    //     })
    // }
    onChangeRender(field, value) {
        // const newState = {};
        // newState[field] = value;
        // this.setState(newState);
        this.setState({ [field]: value })
    }
    render(){
        return (
            <View>
                <FormRow>
                    <TextInput 
                        style={styles.input}
                        placeholder='exemplo@user.com'
                        value={this.state.email}
                        onChangeText={value => this.onChangeRender('email', value)}
                    />
                </FormRow>
                <FormRow>
                    <TextInput 
                        style={styles.input}
                        placeholder='******'
                       secureTextEntry
                       value={this.state.password}
                       onChangeText={value => this.onChangeRender('password', value)}
                    />
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        paddingLeft: 5,
        paddingRight: 5,
    }
})