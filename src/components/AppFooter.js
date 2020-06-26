import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Footer,
    View,
    FooterTab,
    Button,
    Icon,
    Badge,
    Text
} from 'native-base';
import {set_page, set_page_tittle} from '../actions/tittle_manager';
import SettingsPage from '../containers/SettingsPage';
import StartPage from '../containers/StartPage';
import LoginPage from '../containers/LoginPage';
import ReservationPage from '../containers/ReservationPage';
import { LOGIN, MAIN_PAGE, RESERVATION, SETTINGS} from '../store/values/app_values';
import {StyleSheet} from 'react-native';
import {AppStyle} from '../store/values/app_style';
import {set_prev_page} from '../store/reducers/tittle_reducer';

class AppFooter extends Component {
    constructor(props){
        super(props);
    }

    switch_page(page, name, previous_page, prev_page){
        set_prev_page(prev_page);
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
            case MAIN_PAGE:
                this.props.set_page_tittle(name);
                this.props.set_page(StartPage);
                break;
        }

    }

    render() {
        const {page, user} = this.props;
        return (
            <View>
                <Footer style={styles.container}>
                    <FooterTab>
                        <Button onPress={() => {
                            this.switch_page(SETTINGS, page.values.header.tittle.settings, page.previous_page, page.page)
                        }}>
                            <Icon style={styles.icon} name='settings'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(MAIN_PAGE, page.values.header.tittle.cafe, page.previous_page, page.page)
                        }}>
                            <Icon style={styles.icon} name='ios-grid'/>
                        </Button>
                        <Button onPress={() => {
                            this.switch_page(RESERVATION, page.values.header.tittle.reservation, page.previous_page, page.page)
                        }}>
                            <Icon style={styles.icon} name='ios-today'/>
                        </Button>
                        <Button badge vertical onPress={() => {
                            this.switch_page(LOGIN, page.values.header.tittle.login, page.previous_page, page.page)
                        }}>
                            {user.reservation ?
                                <Badge>
                                    <Text>*</Text>
                                </Badge> : <Badge style={{opacity: 0}}>
                                    <Text/>
                                </Badge> }
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
        page: store.page,
        user: store.user
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
        set_page: page => dispatch(set_page(page)),
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
