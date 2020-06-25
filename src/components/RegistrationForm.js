import React, { Component } from 'react';
import {
    Content,
    Item,
    Label,
    Input,
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

    check_data(email, password, repeat_password, phone_number, city) {
        let flag = true;
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            flag = false;
            alert("Mail entered incorrectly")
        } else if (password.length < 6 || repeat_password.length < 6 ) {
            flag = false;
            alert("Password is too short")
        } else if(repeat_password !== password){
            flag = false;
            alert("Password mismatch")
        }
        else if (!/^(-?\d+)([.,]\d+)?$/.test(phone_number)) {
            flag = false;
            alert("The phone number is entered incorrectly.");
            return false;
        }
        else if(city === null){
            flag = false;
            alert("Please choose default city");
            return false;
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
                                    placeholder={'Email'}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    placeholder={'Password'}
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
                                    placeholder={'Repeat password'}
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View style={styles.input_container}>
                            <Item >
                                <TextInput
                                    placeholderTextColor={AppStyle.colors.white}
                                    style={styles.input_field}
                                    placeholder={'Your phone'}
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
                                        title: 'Cafeteria',
                                        cancelButtonIndex: CITIES.length - 1
                                    },
                                    buttonIndex => {
                                        if(buttonIndex !== CITIES.length - 1)
                                            this.props.set_default_city( CITIES[buttonIndex] );
                                    }
                                )}>
                                <Text style={styles.city_text}>DEFAULT CITY</Text>
                            </Button>
                        </Root>
                        <View >
                            <Button style={styles.button_register} onPress={() => this.check_data(this.state.email,
                                this.state.password, this.state.repeat_password, this.state.phone_number)}>
                                <Text style={styles.text_button}>REGISTRATION</Text>
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
        // width: windowWidth,
        paddingTop: 10,
        paddingBottom: 10
    },
    input_field: {
        fontSize: 24,
        color: AppStyle.colors.white,
        // marginLeft: 15,
        // marginRight: 15,
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
