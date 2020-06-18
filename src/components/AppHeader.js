import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Header,
    View,
    Button,
    Icon, Left, Body, Title, Right,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {AppStyle} from '../store/values/app_style';

class AppHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { page} = this.props;
        return (
            <View>
                <Header style={styles.container} >
                    <Left >
                        <Button transparent>
                            <Icon style={styles.icon} name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.text}>{page.header_name}</Title>
                    </Body>
                    <Right />
                </Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyle.colors.gray,
        flexDirection: 'row'
    },
    text: {
        color: 'rgba(255,255,255,0.8)',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20
    },
    button: {
        flex: 0.2
    },
    icon: {
        color: 'rgba(255,255,255,0.8)',
        padding: 10
    }
});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};


export default connect(mapStateToProps)(AppHeader)
