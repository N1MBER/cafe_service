import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import {AppStyle} from '../store/values/app_style';
import {
    Icon,
    List,
    ListItem
} from 'native-base'
import {ICONS, POSITION} from '../store/values/cafe_menu';
import {MENU} from '../store/values/cafe_menu';
class MenuPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <View style={styles.container}>
                <List>
                    {POSITION.map((item, key)=>(
                        <View>
                            <ListItem itemDivider>
                                <Icon name={ICONS[key]}/>
                                <Text key={key}> { item } </Text>
                            </ListItem>
                            {MENU[key] != undefined ?
                                MENU[key].map((element, op)=>(
                                        <ListItem>
                                            <Icon name={'ios-color-filter'}/>
                                            <Text key={op}> { element[0] } </Text>
                                            <Text key={op}> { element[1].toFixed(2) } </Text>
                                        </ListItem>)
                                    ) :
                                <View/>
                            }
                        </View>
                        ))
                    }
                </List>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    inside_container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        width: '80%',
        flex: 8,
        flexBasis: 400,
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: AppStyle.colors.violet,
        alignItems: 'center',
        borderRadius: 50
    },
    logo: {
        width: 200,
        height: 200,
    },
});


const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(MenuPage);
