import React, { Component } from 'react';
import { Text } from 'native-base';
import {View} from 'native-base';

import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
class LoginPage extends Component {
    render() {
        const {style} = this.props;
        return (
            <View>
                <LoginForm/>
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
