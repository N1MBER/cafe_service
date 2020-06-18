import React, { Component } from 'react';
import { Text } from 'native-base';
import {
    View,
    List,
    ListItem,
    CheckBox,
    Body
} from 'native-base';

import {connect} from 'react-redux';
class SettingsPage extends Component {
    render() {
        const {page} = this.props;
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
                        <ListItem>
                            <Text>Sample text</Text>
                        </ListItem>
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
        page: store.page
    }
};

export default connect(mapStateToProps)(SettingsPage);
