import React, { Component } from 'react';
import {
    Item,
    Form,
    Button,
    Root,
    ActionSheet,
} from 'native-base';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {CITIES} from '../store/values/settings_values';
import {set_default_city} from '../actions/settings_manager';
import {AppStyle} from '../store/values/app_style';
import {registration} from '../actions/user_actions';
import {set_page, set_page_tittle, set_previous_page} from '../actions/tittle_manager';
import UserPage from '../containers/UserPage';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            repeat_password: null,
            phone_number: null,
            city: null
        }
    }

    check_data(email, password, repeat_password, phone_number, city, notification) {
        let flag = true;
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            flag = false;
            alert(notification.mail)
        } else if (password.length < 6 || repeat_password.length < 6 ) {
            flag = false;
            alert(notification.password)
        } else if(repeat_password !== password){
            flag = false;
            alert(notification.repeat_password)
        }
        else if (!/^(-?\d+)([.,]\d+)?$/.test(phone_number)) {
            flag = false;
            alert(notification.phone_number);
            return false;
        }
        else if(city === null){
            flag = false;
            alert(notification.default_city);
            return false;
        }
        if (flag){
            let user_info = {
                email: email,
                password: password,
                phone_number: phone_number,
                city: city
            };
            this.props.registration(user_info)
        }
    }

    render() {
        const {page} = this.props;
        return (
                <View style={styles.container}>
                    <Form>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    onChangeText={text => this.setState({email: text})}
                                    placeholder={page.values.registration_page.form.email}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    placeholder={page.values.registration_page.form.password}
                                    onChangeText={text => this.setState({password: text})}
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    onChangeText={text => this.setState({repeat_password: text})}
                                    placeholder={page.values.registration_page.form.repeat_password}
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    placeholder={page.values.registration_page.form.phone}
                                    onChangeText={text => this.setState({phone_number: text})}
                                    secureTextEntry={true}
                                    autoCorrect={true}
                                    keyboardType={'phone-pad'}/>
                            </Item>
                        </View>
                        <Root>
                            <Button  style={styles.button_city} onPress={()=>
                                ActionSheet.show({
                                        options: CITIES,
                                        title: page.values.header.tittle.cafe,
                                        cancelButtonIndex: CITIES.length - 1
                                    },
                                    buttonIndex => {
                                        if(buttonIndex !== CITIES.length - 1) {
                                            this.props.set_default_city(CITIES[buttonIndex]);
                                            this.setState({city: CITIES[buttonIndex]})
                                        }
                                    }
                                )}>
                                <Text style={styles.city_text}>{page.values.registration_page.form.default_city}</Text>
                            </Button>
                        </Root>
                        <View >
                            <Button style={styles.button_register} onPress={() => {
                                this.check_data(this.state.email,
                                    this.state.password, this.state.repeat_password, this.state.phone_number,
                                    this.state.city, page.values.registration_page.notification);
                                if(page.authorized) {
                                    this.props.set_previous_page(page.page);
                                    this.props.set_page_tittle(page.values.header.tittle.user);
                                    this.props.set_page(UserPage);
                                }
                            }
                            }>
                                <Text style={styles.text_button}>{page.values.registration_page.form.registration}</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: 0.9*windowWidth
    },
    button_register:{
        padding:10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.red,
        borderRadius: 40,
        width: 0.9*windowWidth
    },
    button_city:{
        marginTop: 20,
        padding:10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.yellow,
        borderRadius: 40,
        width: 0.9*windowWidth
    },
    city_text:{
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text_button:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    input_container:{
        paddingTop: 10,
        paddingBottom: 10
    },
    input_field: {
        fontSize: 24,
        color: AppStyle.colors.white,
        paddingTop: 10
    },
});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

const mapDispatchToProps = dispatch => {
    return{
        set_default_city: city => dispatch(set_default_city(city)),
        registration: info => dispatch(registration(info)),
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
        set_page: page => dispatch(set_page(page)),
        set_previous_page: page => dispatch(set_previous_page(page)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
