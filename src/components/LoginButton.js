import React, { Component } from 'react';
import {
    Button,
    Icon
}from 'native-base';
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';

import {connect} from 'react-redux';
import {AppStyle} from '../store/values/app_style';
class LoginButton extends Component {
    render() {
        const {page} = this.props;
        return (
            <View style={styles.content}>
                <View style={styles.container}>
                    <View style={styles.element}>
                        <Button style={styles.button}>
                            <Text style={styles.text_button}>{String(page.values.login_page.login)}</Text>
                        </Button>
                    </View>
                    <View style={{flex: 1, flexBasis: 20}}/>
                    <View style={styles.element}>
                        <Button style={styles.button} >
                            <Text style={styles.text_button}>{String(page.values.login_page.registration)}</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.network_text}>
                    <Text style={styles.text} >{String(page.values.login_page.other_variant)}</Text>
                </View>
                <View style={styles.icon_container}>
                    <View>
                        <Button style={styles.icon_button_facebook}>
                            <Icon style={styles.icon} name='logo-facebook'/>
                        </Button>
                    </View>
                    <View>
                        <Button style={styles.icon_button_instagram}>
                            <Icon style={styles.icon} name='logo-instagram'/>
                        </Button>
                    </View>
                    <View>
                        <Button style={styles.icon_button_vk}>
                            <Icon style={styles.icon} name='logo-vk'/>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        flex: 2,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.red,
        borderRadius: 40
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text_button:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    element:{
        flex: 3,
        flexBasis: 130
    },
    content:{
        paddingTop: 30,
        paddingBottom: 30
    },
    network_text:{
        paddingTop: 20
    },
    icon_container: {
        paddingTop: 20,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: 30,
    },
    icon_button_vk: {
        backgroundColor: 'rgba(59,97,151,1)',
        width: 60,
        height: 60,
        justifyContent: 'center',
        borderRadius: 30,
    },
    icon_button_facebook: {
        backgroundColor: '#3b5998',
        width: 60,
        height: 60,
        justifyContent: 'center',
        borderRadius: 30,
    },
    icon_button_instagram: {
        backgroundColor: '#dd2a7b',
        width: 60,
        height: 60,
        justifyContent: 'center',
        borderRadius: 30,
    },
});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(LoginButton);
