import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Header,
    Footer,
    View,
    Text,
    FooterTab,
    Button,
    Icon, Left, Body, Title, Right,
} from 'native-base';
import {set_page, set_page_tittle} from '../actions/tittle_manager';
import SettingsPage from '../containers/SettingsPage';

class AppHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {style, page} = this.props;
        return (
            <View>
                <Header >
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{page.header_name}</Title>
                    </Body>
                    <Right />
                </Header>
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


export default connect(mapStateToProps)(AppHeader)
