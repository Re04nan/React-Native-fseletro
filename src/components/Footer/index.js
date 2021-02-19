import React from 'react';
import {
    View, 
    Text,
    Image
} from 'react-native';
import css_footer from './styles';

export default function Footer () {
    return(
        <View style={css_footer.container_footer}>
            <Text style={css_footer.text_footer}>Formas de Pagamento</Text>
            <Image style={css_footer.img_footer}
                resizeMode='contain'
                source={require('../../../assets/image/formas_pagamentos.png')}
            />
            <Text style={css_footer.copyRight}>Renan Marques - Recode Pro &copy;</Text>
        </View>
    )
}