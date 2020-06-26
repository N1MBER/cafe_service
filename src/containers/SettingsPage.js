import React, { Component, } from 'react';
import {
    View,
    Text,
    List,
    ListItem,
    CheckBox,
    Body,
    ActionSheet,
    Root,
} from 'native-base';
import {connect} from 'react-redux';
import {CITIES, LANGUAGES} from '../store/values/settings_values';
import {
    set_default_city,
    set_language,
    set_new_position_notification,
    set_reservation_notification,
} from '../actions/settings_manager';
import {StyleSheet, Linking,Alert} from 'react-native';
import {AppStyle} from '../store/values/app_style';
import {set_reservation_city} from '../actions/user_actions';
import {set_page_lang} from '../actions/tittle_manager';
class SettingsPage extends Component {
    render() {
        const {page, settings} = this.props;

        return (
            <View style={styles.container}>
                <List>
                    <View>
                        <ListItem itemDivider style={styles.item_title}>
                            <Text style={styles.title_text} >{page.values.settings_page.notification}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <CheckBox onPress={()=> {
                                this.props.set_reservation_notification(!Boolean(settings.reservation_notification))
                            }} checked={settings.reservation_notification}/>
                            <Body>
                                <Text style={styles.text} >{page.values.settings_page.reservation_notification}</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox onPress={()=> {
                                this.props.set_new_position_notification(!Boolean(settings.new_position_notification))
                            }} checked={settings.new_position_notification}/>
                            <Body>
                                <Text style={styles.text} >{page.values.settings_page.new_position_notification}</Text>
                            </Body>
                        </ListItem>
                    </View>

                    <View>
                        <ListItem itemDivider style={styles.item_title}>
                            <Text style={styles.title_text} >{page.values.settings_page.default_city}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <Root>
                        <ListItem onPress={()=>
                            ActionSheet.show({
                                options: CITIES,
                                title: page.values.settings_page.scrooler_city,
                                cancelButtonIndex: CITIES.length - 1
                            },
                                buttonIndex => {
                                if(buttonIndex != CITIES.length - 1)
                                    this.props.set_default_city( CITIES[buttonIndex] );
                                    this.props.set_reservation_city(CITIES[buttonIndex])
                                }
                                )}>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>{page.values.settings_page.default_city}</Text>
                                <Text style={styles.item}>{settings.default_city !== undefined && settings.default_city !== null ?
                                    settings.default_city : page.values.settings_page.not_chosen}</Text>
                            </View>
                        </ListItem>
                        </Root>
                    </View>

                    <View>
                        <ListItem itemDivider style={styles.item_title}>
                            <Text style={styles.title_text} >{page.values.settings_page.language}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <Root>
                            <ListItem onPress={()=>
                                ActionSheet.show({
                                        options: LANGUAGES[0],
                                        title: page.values.settings_page.language,
                                        cancelButtonIndex: LANGUAGES[0].length - 1
                                    },
                                    buttonIndex => {
                                        if(buttonIndex != LANGUAGES[0].length - 1) {
                                            this.props.set_language(LANGUAGES[0][buttonIndex]);
                                            this.props.set_page_lang(LANGUAGES[0][buttonIndex]);
                                        }
                                    }
                                )}>
                                <View style={styles.item_container}>
                                    <Text style={styles.item}>{page.values.settings_page.language} </Text>
                                    <Text style={styles.item}>{settings.language !== undefined && settings.language !== null ?
                                        settings.language : page.values.settings_page.not_chosen}</Text>
                                </View>
                            </ListItem>
                        </Root>
                    </View>
                    <View>
                        <ListItem itemDivider style={styles.item_title}>
                            <Text style={styles.title_text}>{page.values.settings_page.support}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                                <Text onPress={() => {
                                    Linking.openURL('https://github.com/N1MBER')
                                }} style={styles.text}>{page.values.settings_page.report_error}</Text>
                        </ListItem>
                        <ListItem>
                            <Text onPress={() => {
                                Linking.openURL('https://github.com/N1MBER')
                            }} style={styles.text}>{page.values.settings_page.ask_question}</Text>
                        </ListItem>
                    </View>
                    <View style={styles.item_title}>
                        <ListItem itemDivider  style={styles.item_title}>
                            <Text style={styles.title_text}>{page.values.settings_page.about_us}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>{page.values.settings_page.technology_app}</Text>
                                <Text style={styles.item}>React Native</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>{page.values.settings_page.developer}</Text>
                                <Text style={styles.item}>N1MBER</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>{page.values.settings_page.version}</Text>
                                <Text style={styles.item}>0.0.2</Text>
                            </View>
                        </ListItem>
                    </View>
                </List>
                <Text style={{paddingTop:30,paddingBottom:30,color: 'white', textAlign: 'center'}}>{page.values.settings_page.designed}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyle.colors.background,
    },
    item_title:{
        backgroundColor: AppStyle.colors.blue_gray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.38,
        shadowRadius: 6.00,

        elevation: 14,
    },
    title_text:{
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Arial',
        color: 'white'
    },
    text:{
        color: 'rgba(0,0,0,0.8)'
    },
    item_container: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        color: 'rgba(0,0,0,0.8)'
    }
});

const mapStateToProps = store => {
    return {
        page: store.page,
        settings: store.settings
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        set_default_city: city => dispatch(set_default_city(city)),
        set_language: language => dispatch(set_language(language)),
        set_page_lang: language => dispatch(set_page_lang(language)),
        set_new_position_notification: value => dispatch(set_new_position_notification(value)),
        set_reservation_notification: value => dispatch(set_reservation_notification(value)),
        set_reservation_city: city => dispatch(set_reservation_city(city)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
