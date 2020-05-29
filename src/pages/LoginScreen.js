import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator, Alert } from 'react-native';

import firebase from 'firebase';
import { connect } from 'react-redux'

import FormRow from '../components/FormRow'

import { tryLogin } from '../actions'

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            message:''
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBELIBgs9AsgBi4GkxvKE7KCYVGYmYh3Hw",
            authDomain: "series-77617.firebaseapp.com",
            databaseURL: "https://series-77617.firebaseio.com",
            projectId: "series-77617",
            storageBucket: "series-77617.appspot.com",
            messagingSenderId: "88368585313",
            appId: "1:88368585313:web:c76271e63bd6ab0b03e820",
            measurementId: "G-FPNXSBKQ6N"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

    }

    onChangeRender(field, value) {
        this.setState({ [field]: value })
    }

    tryLogin() {
        this.setState({ isLoading: true, message: ''})
        const { email, password } = this.state;

        this.props.tryLogin({ email, password })
            .then( user => {
                if (user) {
                    this.props.navigation.replace('Main')
                }
                else {
                    this.setState({
                        isLoading: false,
                        message: ''
                    })
                }
            })
            .catch( error => {
                this.setState({
                    isLoading: false,
                    message: this.getMessageByErrorCode(error.code)
                })
            })
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/invalid-email':
                return 'E-mail inválido!';
                
            case 'auth/user-not-found':
                return 'Usuário não encontrado!';

            case 'auth/wrong-password':
                return 'Senha Inválida!';
        
            default:
                return 'Erro Desconhecido!';
        }

    }

    renderMessage() {
        const { message } = this.state;
        if (!message){
            return null;
        } else {
            console.log(message)
            return(
                Alert.alert(
                    message,
                    'Tente novamente!',
                    [{
                        text: 'Ok',
                        onPress: () => {},
                        style: 'cancel' //IOS
                    }],
                    { cancelable: false}
                    ) 
            );
        }
        
    }

    renderButton() {
        if (this.state.isLoading){
            return <ActivityIndicator />
        }
        return(
            <Button 
                    title="Entrar"
                    onPress={() => this.tryLogin()}
                />
        )
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
                        keyboardType="email-address"
                        autoCapitalize="none"
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
                { this.renderButton() }
                { this.renderMessage() }
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

// const mapStateToProps = {

// }

const mapDispatchToProps = {
    tryLogin
}

export default connect(null,mapDispatchToProps)(LoginPage)