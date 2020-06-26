import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Header,
    View,
    Button,
    Icon, Left, Body, Title, Right,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {AppStyle} from '../store/values/app_style';
import {get_title, set_page, set_page_tittle} from '../actions/tittle_manager';
import {get_prev_page} from '../store/reducers/tittle_reducer';

class AppHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { page} = this.props;
        return (
            <View>
                <Header style={styles.container} >
                    <Left>
                        {page.previous_page.length !== 0 ?
                            <Button transparent onPress={() => {
                                if (page.previous_page.length !== 0) {
                                    let Prev_page = get_prev_page();
                                    this.props.set_page(Prev_page);
                                    this.props.set_page_tittle(get_title(Prev_page))
                                }
                            }}>
                                <Icon style={styles.icon} name='arrow-back'/>
                            </Button>:null
                        }
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
const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyle.colors.gray,
        flexDirection: 'row',

    },
    text: {
        color: 'rgba(255,255,255,0.8)',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20,
        width: 0.6*windowWidth
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

const mapDispatchToProps = dispatch =>{
    return{
        set_page: page => dispatch(set_page(page)),
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
