import React, { Component } from 'react';
import { Text } from 'native-base';
import {View} from 'native-base';

import {connect} from 'react-redux';
class SettingsPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <View>
                <Text>Settings Page</Text>
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
