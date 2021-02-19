import { StyleSheet } from 'react-native';

const css_footer = StyleSheet.create({
    container_footer : {
        height: '15%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_footer : { 
        fontFamily: 'Asap Condensed', 
        fontSize: 10, 
        color: 'red' 
    },
    img_footer : {
        width: '80%',
        height: '60%',
    },
    copyRight : {
        fontStyle: 'italic', 
        fontSize: 5, 
        color: 'white'
    }
})

export default css_footer;