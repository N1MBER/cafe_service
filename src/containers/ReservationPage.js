import React, { Component } from 'react';
import { Text } from 'native-base';
import {View} from 'native-base';

import {connect} from 'react-redux';
class ReservationPage extends Component {
    render() {
        return (
            <View>
                <Text>Reservation Page</Text>
            </View>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(ReservationPage);
