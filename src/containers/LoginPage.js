import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {AppStyle} from '../store/values/app_style';
class LoginPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <View style={styles.container}>
                <View style={{flex: 1, flexBasis: 200}}/>
                <View style={styles.inside_container}>
                    <Image style={styles.logo}  source={require('../images/icons/user.png')} />
                    <LoginForm />
                </View>
                <View style={{flex: 1, flexBasis: 200}}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    inside_container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        width: '80%',
        flex: 8,
        flexBasis: 400,
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: AppStyle.colors.yellow,
        alignItems: 'center',
        borderRadius: 50
    },
    logo: {
        width: 200,
        height: 200,
    },
});


const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(LoginPage);
