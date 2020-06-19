import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Footer,
    View,
    FooterTab,
    Button,
    Icon,
} from 'native-base';
import {set_page, set_page_tittle,set_previous_page} from '../actions/tittle_manager';
import SettingsPage from '../containers/SettingsPage';
import StartPage from '../containers/StartPage';
import LoginPage from '../containers/LoginPage';
import ReservationPage from '../containers/ReservationPage';
import {LOCATION, LOGIN, MENU, RESERVATION, SETTINGS} from '../store/values/app_values';
import {StyleSheet} from 'react-native';
import {AppStyle} from '../store/values/app_style';
import MenuPage from '../containers/MenuPage';

class AppFooter extends Component {
    constructor(props){
        super(props);
    }

    switch_page(page, name, header, prev_page){
        if (name != header){
            this.props.set_previous_page(prev_page)
        }
        switch (page) {
            case SETTINGS:
                this.props.set_page_tittle(name);
                this.props.set_page(SettingsPage);
                break;
            case LOGIN:
                this.props.set_page_tittle(name);
                this.props.set_page(LoginPage);
                break;
            case RESERVATION:
                this.props.set_page_tittle(name);
                this.props.set_page(ReservationPage);
                break;
            case MENU:
                this.props.set_page_tittle(name);
                this.props.set_page(MenuPage);
                break;
        }

    }

    render() {
        const {page} = this.props;
        return (
            <View>
                <Footer style={styles.container}>
                    <FooterTab>
                        <Button onPress={() => {
                            this.switch_page(SETTINGS, page.values.header.tittle.settings, page.header_name, page.page)
                        }}>
                            <Icon style={styles.icon} name='settings'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(MENU, page.values.header.tittle.menu, page.header_name, page.page)
                        }}>
                            <Icon style={styles.icon} name='restaurant'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(RESERVATION, page.values.header.tittle.reservation, page.header_name, page.page)
                        }}>
                            <Icon style={styles.icon} name='ios-today'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(LOGIN, page.values.header.tittle.login, page.header_name, page.page)
                        }}>
                            <Icon style={styles.icon} name='md-person'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>

        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
        set_page: page => dispatch(set_page(page)),
        set_previous_page: page => dispatch(set_previous_page(page)),
    }
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyle.colors.gray,
        flexDirection: 'row'
    },
    icon: {
        color: 'rgba(255,255,255,0.8)'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
