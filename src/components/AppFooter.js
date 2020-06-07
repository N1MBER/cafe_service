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

class AppFooter extends Component {
    constructor(props){
        super(props);
    }

    switch_page(page){
        switch (page) {
            case "settings":
                this.props.set_page_tittle('Settings');
                this.props.set_page(SettingsPage);
                break;
            case "login":
                this.props.set_page_tittle('Login');
                this.props.set_page(LoginPage);
                break;
            case "reservation":
                this.props.set_page_tittle('Reservation');
                this.props.set_page(ReservationPage);
                break;
            case "location":
                this.props.set_page_tittle('Location');
                this.props.set_page(StartPage);
                break;
        }

    }

    render() {
        const {style} = this.props;
        return (
            <View>
                <Footer >
                    <FooterTab>
                        <Button onPress={() => {
                            this.switch_page("settings")
                        }}>
                            <Icon name='settings'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page("reservation")
                        }}>
                            <Icon name='ios-today'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page("location")
                        }}>
                            <Icon name='map'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page("login")
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
        style: store.style
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
        set_page: page => dispatch(set_page(page))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
