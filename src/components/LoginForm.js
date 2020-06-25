import React, { Component } from 'react';
import {
    Content,
    Item,
    Label,
    Input,
    Form,
    Button
}from 'native-base';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {connect} from 'react-redux';
import LoginButton from './LoginButton';
import {AppStyle} from '../store/values/app_style';
class LoginForm extends Component {
    render() {
        const {page} = this.props;
        return (
            <Content>
                <View>
                    <Form>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    style={styles.input_field}
                                    placeholderTextColor={AppStyle.colors.white}
                                    placeholder={'Email or username'}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    placeholder={'Password'}
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                    </Form>
                </View>
                <LoginButton />
            </Content>
        );
    }
}

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    input_container:{
        // width: windowWidth,
        paddingTop: 10,
        paddingBottom: 10
    },
    input_field: {
        fontSize: 24,
        color: AppStyle.colors.white,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 10
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },

});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(LoginForm);
