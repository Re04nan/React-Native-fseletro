import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    StyleSheet,
    ImageBackground
} from 'react-native';
import Footer from '../../components/Footer';
import global from '../../../Styles_global';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
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
                        title='Ir para Produtos' onPress={() =>
                            navigation.navigate('Produtos')}>
                        <Icon name="shopping-cart" color="white" size={40} />
                        <Text style={global.text_nav}>Produtos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title='Ir para Login' onPress={() =>
                            navigation.navigate('Login')}>
                        <Icon name="sign-in" color="white" size={40} />
                        <Text style={global.text_nav}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={css.container_main}>
                <Text style={css.text_main}>Seja bem vindo(a)!</Text>
                <Text style={css.text_sub}>Aqui em nossa loja, 
                    devs tem descontos % nos produtos para sua casa!
                </Text>
                <ImageBackground style={css.img_background}
                    source={require('../../../assets/image/equipamentos-descontos.png')}>
                </ImageBackground>
            </View>
            <Footer />
        </View>
    );
}

const css = StyleSheet.create({
    container_main: {
        height: '70%'
    },
    text_main: {
        fontFamily: "Asap Condensed",
        fontSize: 28,
        textAlign: 'center',
        marginTop: 20
    },
    text_sub: {
        fontFamily: "Asap Condensed",
        fontSize: 16,
        marginTop: 20,
        padding: 10
    },
    img_background: {
        width: '100%',
        height: '80%',
        opacity: 0.5
    }
})