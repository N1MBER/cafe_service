import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {AppStyle} from '../store/values/app_style';
import {Icon} from 'native-base'
import RegistrationForm from '../components/RegistrationForm';

class RegistrationPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon style={styles.logo} name={'logo-ionitron'}/>
                <View style={styles.inside_container}>
                    <RegistrationForm />
                </View>
            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 0.8 * windowHeight
    },
    inside_container: {
        flex: 3,
        width: windowWidth,
        paddingTop: 10,
        paddingBottom: 10 ,
        backgroundColor: AppStyle.colors.blue_gray,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    logo: {
        fontSize: 250,
        flex: 2,
        color: 'rgba(0,0,0,0.8)',
    },
});


const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(RegistrationPage);
