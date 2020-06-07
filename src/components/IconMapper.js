import React, { Component } from 'react';
import {
    Content,
    Item,
    Label,
    Input,
    Form
}from 'native-base';
import { Container, Header, Icon } from 'native-base';

export default class IconMapper extends Component {
    render() {
        const {style} = this.props;
        return (
            <Container>
                <Content>
                    <Icon name='home' />
                    <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                    <Icon type="FontAwesome" name="home" />
                </Content>
            </Container>
        );
    }
}
