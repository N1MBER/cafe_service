import React, { Component } from 'react';
import { Text } from 'native-base';
import {
    View,
    List,
    ListItem,
    CheckBox,
    Body,
    ActionSheet,
    Root
} from 'native-base';

import {connect} from 'react-redux';
import {CITIES} from '../store/values/settings_values';
import {set_default_city, set_language} from '../actions/settings_manager';
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
                            <CheckBox  />
                            <Body>
                                <Text>Reservation notification</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <CheckBox  />
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
                                cancelButtonIndex: 3
                            },
                                buttonIndex => {
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
                        <ListItem>
                            <Text>Sample text</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem itemDivider>
                            <Text>{page.values.settings_page.support}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <Text>Sample text</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem itemDivider>
                            <Text>{page.values.settings_page.about_us}</Text>
                        </ListItem>
                    </View>
                    <View>
                        <ListItem>
                            <Text>Sample text</Text>
                        </ListItem>
                    </View>
                </List>
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
        set_language: language => dispatch(set_language(language))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
