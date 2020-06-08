import React, { Component } from 'react';
import { Text } from 'native-base';
import {View} from 'native-base';

import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import IconMapper from '../components/IconMapper';
class LoginPage extends Component {
    render() {
        const {style, page} = this.props;
        return (
            <View>
                <View>
                    <IconMapper />
                </View>
                <View>
                    <LoginForm/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = store => {
    return {
        style: store.style,
        page: store.page
    }
};

export default connect(mapStateToProps)(LoginPage);
