import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
    FlatList
} from 'react-native';
import Footer from '../../components/Footer';
import global from '../../../Styles_global';
import Icon from 'react-native-vector-icons/FontAwesome';

const lista =
    [
        {
            id: 1,
            nome: 'Fogão Stone Prata',
            descricao: 'Alta performace, forno espaçoso',
            imagem: require('../../../assets/image/Produtos/fogao_stone_prata.jpg')
        },
        {
            id: 2,
            nome: 'Geladeira Brastemp',
            descricao: '2 portas, compatimento planejados - 400L',
            imagem: require('../../../assets/image/Produtos/geladeira_brastemp.jpg')
        },
        {
            id: 3,
            nome: 'Fogão Tecnogas Max',
            descricao: '6 bocas, forno industrial extra grande',
            imagem: require('../../../assets/image/Produtos/fogao_tecnogas_max.jpg')
        },
    ];

export default function Produtos({ navigation }) {
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
                        title='Ir para Login' onPress={() =>
                            navigation.navigate('Login')}>
                        <Icon name="sign-in" color="white" size={40} />
                        <Text style={global.text_nav}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={css.container_main}>
                <FlatList
                    data={lista}
                    renderItem={({ item, index }) => (
                        <View style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View key={index} style={{
                                width: '80%',
                                alignItems: 'center',
                                margin: 15
                            }}>
                                <Text style={css.text_tituloProduto}>{item.nome}</Text>
                                <Image source={item.imagem}
                                    style={{ width: 120, height: 200 }}
                                    resizeMode='contain'
                                />
                                <Text style={css.text_descricao}>{item.descricao}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <Footer />
        </View>
    )
}
const css = StyleSheet.create({
    container_main: {
        height: '70%'
    },
    text_descricao: {
        fontFamily: 'Asap Condensed',
        fontSize: 18,
        textAlign: 'center'
    },
    text_tituloProduto: {
        fontFamily: 'Asap Condensed',
        fontSize: 22,
        color: '#2b7de9',
        padding: 10
    }

})