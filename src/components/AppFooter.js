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
import {StyleSheet} from 'react-native';

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
        const {page} = this.props;
        return (
            <View>
                <Footer style={styles.container}>
                    <FooterTab>
                        <Button onPress={() => {
                            this.switch_page(SETTINGS, page.values.header.tittle.settings)
                        }}>
                            <Icon style={styles.icon} name='settings'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(RESERVATION, page.values.header.tittle.reservation)
                        }}>
                            <Icon style={styles.icon} name='ios-today'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(LOCATION, page.values.header.tittle.location)
                        }}>
                            <Icon style={styles.icon} name='map'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(LOGIN, page.values.header.tittle.login)
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
        set_page: page => dispatch(set_page(page))
    }
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#50514f',
        flexDirection: 'row'
    },
    icon: {
        color: 'rgba(255,255,255,0.8)'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter)
