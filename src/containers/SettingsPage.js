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
class SettingsPage extends Component {
    render() {
        const {page, settings} = this.props;

        return (
            <View>
                <List>
                    <View>
                        <ListItem itemDivider>
                            <Text>{page.values.settings_page.notification}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <CheckBox onPress={()=> {
                                this.props.set_reservation_notification(!Boolean(settings.reservation_notification))
                            }} checked={settings.reservation_notification}/>
                            <Body>
                                <Text>Reservation notification</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox onPress={()=> {
                                this.props.set_new_position_notification(!Boolean(settings.new_position_notification))
                            }} checked={settings.new_position_notification}/>
                            <Body>
                                <Text>Notification of new positions</Text>
                            </Body>
                        </ListItem>
                    </View>

                    <View>
                        <ListItem itemDivider>
                            <Text>{page.values.settings_page.default_city}</Text>
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
                            <View >
                                <Text>Default city: </Text>
                                <Text>{settings.default_city}</Text>
                            </View>
                        </ListItem>
                        </Root>
                    </View>

                    <View>
                        <ListItem itemDivider>
                            <Text>{page.values.settings_page.language}</Text>
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
                                <View >
                                    <Text>Language: </Text>
                                    <Text>{settings.language}</Text>
                                </View>
                            </ListItem>
                        </Root>
                    </View>
                    <View>
                        <ListItem itemDivider>
                            <Text>{page.values.settings_page.support}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <Text>Report an error</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ask a Question</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem itemDivider>
                            <Text>{page.values.settings_page.about_us}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <View>
                                <Text>Technology for app </Text>
                                <Text>React Native</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View>
                                <Text>Developer</Text>
                                <Text>N1MBER</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View>
                                <Text>Version</Text>
                                <Text>0.0.2</Text>
                            </View>
                        </ListItem>
                    </View>
                </List>
                <Text>Designed by N1MBER in St. Peterspurg</Text>
            </View>
        );
    }
}

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
