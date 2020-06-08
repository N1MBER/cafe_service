import React, { Component } from 'react';
import {
    Content,
    Item,
    Label,
    Input,
    Form
}from 'native-base';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Header, Icon } from 'native-base';

export default class IconMapper extends Component {
    render() {
        const {style} = this.props;
        return (
            <Container>
                <Image style={{width: 100, height: 100}} source={require('../images/icons/user.png')} />
            </Container>
        );
    }
}
