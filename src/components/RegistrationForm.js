import React, { Component } from 'react';
import {
    Content,
    Item,
    Label,
    Input,
    Form,
    Button, ActionSheet,
} from 'native-base';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {connect} from 'react-redux';
import LoginButton from './LoginButton';
import {CITIES} from '../store/values/settings_values';
import {set_reservation_date, set_reservation_place, set_reservation_time} from '../actions/user_actions';
import {set_default_city} from '../actions/settings_manager';
import {AppStyle} from '../store/values/app_style';
class RegistrationForm extends Component {
    render() {
        const {page} = this.props;
        return (
            <Content>
                <View style={styles.container}>
                    <Form>
                        <View>
                            <Item floatingLabel >
                                <Label style={styles.text}>Email or username</Label>
                                <TextInput style={{width: windowWidth, backgroundColor: 'red'}}  />
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
                        <View>
                            <Item  floatingLabel >
                                <Label style={styles.text}>Repeat password</Label>
                                <TextInput
                                    secureTextEntry={true}
                                    autoCorrect={true}/>
                            </Item>
                        </View>
                        <View>
                            <Item  floatingLabel >
                                <Label style={styles.text}>Your phone</Label>
                                <TextInput
                                    keyboardType={'phone-pad'}/>
                            </Item>
                        </View>
                        <Button style={styles.select_city_button} onPress={()=>
                            ActionSheet.show({
                                    options: CITIES,
                                    title: 'Cafeteria',
                                    cancelButtonIndex: CITIES.length - 1
                                },
                                buttonIndex => {
                                    if(buttonIndex != CITIES.length - 1)
                                        this.props.set_default_city( CITIES[buttonIndex] );
                                }
                            )}>
                            <Text style={styles.select_city_text}>Default city</Text>
                        </Button>
                        <View style={{width: windowWidth}}>
                            <Button style={styles.button}>
                                <Text style={styles.text_button}>REGISTRATION</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
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
    button:{
        // flex: 2,
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

const mapDispatchToProps = dispatch => {
    return{
        set_default_city: city => dispatch(set_default_city(city)),
    }
};

export default connect(mapStateToProps)(RegistrationForm);
