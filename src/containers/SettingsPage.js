import React, { Component } from 'react';
import { Text } from 'native-base';
import {
    View,
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
import {StyleSheet} from 'react-native';
import {AppStyle} from '../store/values/app_style';
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
                                <Text style={styles.text} >Reservation notification</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox onPress={()=> {
                                this.props.set_new_position_notification(!Boolean(settings.new_position_notification))
                            }} checked={settings.new_position_notification}/>
                            <Body>
                                <Text style={styles.text} >Notification of new positions</Text>
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
                                title: 'Default city',
                                cancelButtonIndex: CITIES.length - 1
                            },
                                buttonIndex => {
                                if(buttonIndex != CITIES.length - 1)
                                    this.props.set_default_city( CITIES[buttonIndex] );
                                }
                                )}>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>Default city: </Text>
                                <Text style={styles.item}>{settings.default_city}</Text>
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
                                        options: LANGUAGES,
                                        title: 'Language',
                                        cancelButtonIndex: LANGUAGES.length - 1
                                    },
                                    buttonIndex => {
                                        if(buttonIndex != LANGUAGES.length - 1)
                                            this.props.set_language( LANGUAGES[buttonIndex] );
                                    }
                                )}>
                                <View style={styles.item_container}>
                                    <Text style={styles.item}>Language: </Text>
                                    <Text style={styles.item}>{settings.language}</Text>
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
                            <Text style={styles.text}>Report an error</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Ask a Question</Text>
                        </ListItem>
                    </View>
                    <View style={styles.item_title}>
                        <ListItem itemDivide r>
                            <Text style={styles.title_text}>{page.values.settings_page.about_us}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>Technology for app </Text>
                                <Text style={styles.item}>React Native</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>Developer</Text>
                                <Text style={styles.item}>N1MBER</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={styles.item_container}>
                                <Text style={styles.item}>Version</Text>
                                <Text style={styles.item}>0.0.2</Text>
                            </View>
                        </ListItem>
                    </View>
                </List>
                <Text style={{paddingTop:30,paddingBottom:30,color: 'white', textAlign: 'center'}}>Designed by N1MBER in St. Peterspurg</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyle.colors.purple,
    },
    item_title:{
        backgroundColor: AppStyle.colors.blue_gray,
    },
    title_text:{
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'Arial',
        color: 'white'
    },
    text:{
        color: 'white'
    },
    item_container: {
        flex: 1,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        color: 'white'
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
        set_new_position_notification: value => dispatch(set_new_position_notification(value)),
        set_reservation_notification: value => dispatch(set_reservation_notification(value))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
