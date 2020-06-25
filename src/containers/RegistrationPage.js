import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {AppStyle} from '../store/values/app_style';
import {Icon} from 'native-base'
import RegistrationForm from '../components/RegistrationForm';
class RegistrationPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <View style={styles.container}>
                <Icon style={{fontSize: 200, flex: 1, color: 'rgba(0,0,0,0.8)'}} name={'logo-octocat'}/>
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
        height: windowHeight
    },
    inside_container: {
        flex: 3,
        width: windowWidth,
        height: windowHeight /2,
        // flexBasis: 400,
        // paddingTop: 50,
        // paddingBottom: 10 ,
        backgroundColor: AppStyle.colors.blue_gray,
        alignItems: 'center',
        marginBottom: 0

        // borderRadius: 50
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

export default connect(mapStateToProps)(RegistrationPage);
