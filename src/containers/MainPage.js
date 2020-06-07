import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import AppFooter from '../components/AppFooter';
import {View} from 'native-base';
import {connect} from 'react-redux';
import AppHeader from '../components/AppHeader';
import StartPage from './StartPage';
import SettingsPage from './SettingsPage';
import LoginPage from './LoginPage';
import ReservationPage from './ReservationPage';
class MainPage extends Component {
    render() {
        const {style, page} = this.props;
        let View_Page = null;
        switch (page.page) {
            case StartPage:
                View_Page = StartPage;
                break;
            case SettingsPage:
                View_Page = SettingsPage;
                break;
            case LoginPage:
                View_Page = LoginPage;
                break;
            case ReservationPage:
                View_Page = ReservationPage;
                break;
            default:
                View_Page = StartPage;
                break;
        }
        return (
            <Container>
                <View>
                    <AppHeader />
                </View>
                <Content>
                <View_Page/>
                </Content>
                <View>
                    <AppFooter style={style} />
                </View>
            </Container>
        );
    }
}


const mapStateToProps = store => {
    return {
        style: store.style,
        page: store.page
    }
};

export default connect(mapStateToProps)(MainPage);
