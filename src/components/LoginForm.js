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
    StyleSheet
}from 'react-native';

import {connect} from 'react-redux';
import LoginButton from './LoginButton';
class LoginForm extends Component {
    render() {
        const {page} = this.props;
        return (
            <Content>
                <View>
                    <Form>
                        <View>
                            <Item floatingLabel >
                                <Label style={styles.text}>Email or username</Label>
                                <TextInput />
                            </Item>
                        </View>
                        <View>
                            <Item  floatingLabel >
                                <Label style={styles.text}>Password</Label>
                                <TextInput
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    input_container:{
        width: '80%',
        opacity: 0.8,
        alignContent: 'center',
        color: 'white'
    },
    input_field: {
        color: 'transparent',
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
