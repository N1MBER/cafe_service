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
import {StyleSheet} from 'react-native';



class MainPage extends Component {
    render() {
        const { page} = this.props;
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
            <Container >
                <View>
                    <AppHeader />
                </View>
                <Content style={styles.content}>
                    <View_Page/>
                </Content>
                <View>
                    <AppFooter />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor: '#70c1b3'
    }
});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(MainPage);
