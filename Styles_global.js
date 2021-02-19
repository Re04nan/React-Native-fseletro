import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
    container_principal: {
        width: '100%',
        height: '100%',
    },
    container_secundario: {
        height: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    container_logo: {
        backgroundColor: 'black',
        width: '30%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_nav: {
        width: '70%',
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text_nav: { 
        fontFamily: 'Asap Condensed', 
        fontSize: 12, 
        color: 'white' 
    },
    img_logo: {
        width: '80%',
        height: '80%'
    },
})

export default global;