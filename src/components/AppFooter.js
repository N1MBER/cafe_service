import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Footer,
    View,
    FooterTab,
    Button,
    Icon,
} from 'native-base';
import {set_page, set_page_tittle} from '../actions/tittle_manager';
import SettingsPage from '../containers/SettingsPage';
import StartPage from '../containers/StartPage';
import LoginPage from '../containers/LoginPage';
import ReservationPage from '../containers/ReservationPage';
import {LOCATION, LOGIN, RESERVATION, SETTINGS} from '../store/values/app_values';

class AppFooter extends Component {
    constructor(props){
        super(props);
    }

    switch_page(page, name){
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
            case LOCATION:
                this.props.set_page_tittle(name);
                this.props.set_page(StartPage);
                break;
        }

    }

    render() {
        const {style, page} = this.props;
        return (
            <View>
                <Footer >
                    <FooterTab>
                        <Button onPress={() => {
                            this.switch_page(SETTINGS, page.names.header.tittle.settings)
                        }}>
                            <Icon name='settings'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(RESERVATION, page.names.header.tittle.reservation)
                        }}>
                            <Icon name='ios-today'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(LOCATION, page.names.header.tittle.location)
                        }}>
                            <Icon name='map'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(LOGIN, page.names.header.tittle.login)
                        }}>
                            <Icon name='md-person'/>
                        </Button>
                    </FooterTab>
                </Footer>
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

const mapDispatchToProps = dispatch =>{
    return{
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
        set_page: page => dispatch(set_page(page))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
