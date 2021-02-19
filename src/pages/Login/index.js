import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    StyleSheet,
    Alert
} from 'react-native';
import Footer from '../../components/Footer';
import global from '../../../Styles_global';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

const user = {
    email: "Recode@teste.com",
    senha: "123"
}

export default function Login({ navigation }) {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    function autenticar() {
        if (user.email === email && user.senha === senha) {
            Alert.alert('Bem Vindo(a)!','Aproveite nossas ofertas!')
            navigation.navigate('Produtos')
        } else {
            Alert.alert('Atenção!','Erro ao fazer login, tente novamente!')
        }
    }
    return (
        <View style={global.container_principal}>
            <StatusBar />
            <View style={global.container_secundario}>
                <View style={global.container_logo}>
                    <Image style={global.img_logo}
                        resizeMode='contain'
                        source={require('../../../assets/image/logo.png')}
                    />
                </View>
                <View style={global.container_nav}>
                    <TouchableOpacity
                        title='Ir para Home' onPress={() =>
                            navigation.navigate('Home')}>
                        <Icon name="home" color="white" size={40} />
                        <Text style={global.text_nav}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title='Ir para Produtos' onPress={() =>
                            navigation.navigate('Produtos')}>
                        <Icon name="shopping-cart" color="white" size={40} />
                        <Text style={global.text_nav}>Produtos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={css.container_main}>
                <View style={css.container_article}>
                    <View style={css.container_form}>
                        <Text style={css.text_login}>Login</Text>
                        <Input
                            placeholder='E-mail:' value={email}
                            autoCompleteType='email'
                            maxLength={50}
                            keyboardType='email-address'
                            onChangeText={(text) => setEmail(text)}
                            leftIcon={
                                <Icon
                                    name='envelope'
                                    size={18}
                                    color='black'
                                />}
                        />
                        <Input
                            placeholder='Senha:' value={senha}
                            secureTextEntry={true}
                            maxLength={8}
                            onChangeText={(text) => setSenha(text)}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={22}
                                    color='black'
                                />}
                        />
                        <Button title='Entrar' onPress={autenticar}/>
                    </View>
                </View>
            </View>
            <Footer />
        </View>
    )
}
const css = StyleSheet.create({
    container_main: {
        height: '70%'
    },
    container_article: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    container_form: {
        width: '60%',
        height: '80%',
        padding: 20,
        backgroundColor: '#FFF',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    text_login: {
        fontFamily: 'Asap Condensed',
        textAlign: 'center',
        opacity: 0.8,
        fontSize: 24,
        color: 'black',
        padding: 10
    },
})