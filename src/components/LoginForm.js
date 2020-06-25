import React, { Component } from 'react';
import {
    Content,
    Item,
    Form,
    Button, Icon,
} from 'native-base';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {connect} from 'react-redux';
import {AppStyle} from '../store/values/app_style';
import {LOGIN, REGISTRATION, USER} from '../store/values/app_values';
import RegistrationPage from '../containers/RegistrationPage';
import UserPage from '../containers/UserPage';
import LoginPage from '../containers/LoginPage';
import {set_page, set_page_tittle, set_previous_page} from '../actions/tittle_manager';
class LoginForm extends Component {
    switch_page(page, name, header, prev_page){
        if (name != header){
            this.props.set_previous_page(prev_page)
        }
        switch (page) {
            case REGISTRATION:
                this.props.set_page_tittle(name);
                this.props.set_page(RegistrationPage);
                break;
            case USER:
                this.props.set_page_tittle(name);
                this.props.set_page(UserPage);
                break;
            case LOGIN:
                this.props.set_page_tittle(name);
                this.props.set_page(LoginPage);
                break;
        }
    }

    constructor(props){
        super(props);
        this.state = {login: null, password: null}
    }

    setLogin(login){
        this.setState({
            login: login
        })
    }

    checkData(login, password, notification){
        let flag = true;
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(login)){
            flag = false;
            alert(notification.mail_notification)
        }else if(password.length < 6){
            flag = false;
            alert(notification.password_notification)
        }
    }

    setPassword(password){
        this.setState({
            password: password
        })
    }

    render() {
        const {page} = this.props;
        return (
            <Content>
                <View>
                    <Form>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    onChangeText={login => this.setLogin(login)}
                                    style={styles.input_field}
                                    placeholderTextColor={AppStyle.colors.white}
                                    placeholder={page.values.login_page.form.email}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    onChangeText={password => this.setPassword(password)}
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    placeholder={page.values.login_page.form.password}
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                    </Form>
                </View>
                <View style={styles.content}>
                    <View style={styles.container}>
                        <View style={styles.element}>
                            <Button style={styles.button} onPress={() => {
                                this.checkData(this.state.login, this.state.password, page.values.login_page.notification)
                                this.switch_page(USER, page.values.header.tittle.user, page.header_name, page.page)
                            }}>
                                <Text style={styles.text_button}>{String(page.values.login_page.form.login)}</Text>
                            </Button>
                        </View>
                        <View style={{flex: 1, flexBasis: 20}}/>
                        <View style={styles.element}>
                            <Button style={styles.button} onPress={() =>
                                this.switch_page(REGISTRATION, page.values.header.tittle.register, page.header_name, page.page)
                            }>
                                <Text style={styles.text_button}>{String(page.values.login_page.form.registration)}</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={styles.network_text}>
                        <Text style={styles.text} >{String(page.values.login_page.form.other_variant)}</Text>
                    </View>
                    <View style={styles.icon_container}>
                        <View>
                            <Button style={styles.icon_button_facebook} >
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
            </Content>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    button:{
        flex: 2,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.red,
        borderRadius: 40
    },
    text_button:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16,
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
        paddingTop: 20,

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
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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


});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
        set_page: page => dispatch(set_page(page)),
        set_previous_page: page => dispatch(set_previous_page(page)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
