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
import { Dimensions,ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;

class MenuPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <List style={styles.list}>
                        {POSITION.map((item, key)=>(
                            <View >
                                <ListItem itemDivider style={styles.title_container}>
                                    <Icon name={ICONS[key]} style={styles.title_icon}/>
                                    <Text key={key} style={styles.title_text}> { item } </Text>
                                </ListItem>
                                {MENU[key] != undefined ?
                                    MENU[key].map((element, op)=>(
                                            <ListItem style={styles.content}>
                                                <Icon name={'ios-color-filter'} style={styles.content_icon}/>
                                                <Text key={op} style={styles.content_text}> { element[0] } </Text>
                                                <Text key={op } style={styles.content_price}> { element[1].toFixed(2) } $</Text>
                                            </ListItem>)
                                        ) :
                                    <View/>
                                }
                            </View>
                            ))
                        }
                    </List>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        flex: 1,
    },
    list:{
        width: windowWidth,
        marginTop: 0
    },
    title_container: {
        flexDirection: 'row',
        flex: 1,
       backgroundColor: AppStyle.colors.blue_gray,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 5,
       },
       shadowOpacity: 0.38,
       shadowRadius: 6.00,

       elevation: 14,
   },
   title_icon: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 25,
       paddingRight: 10
   },
    title_text:{
        color: 'rgba(255,255,255,0.8)',
        fontSize: 25,
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    content_icon: {
        flex: 0.8,
        fontSize: 20,
        color: 'rgba(0,0,0,0.8)'
    },
    content_text: {
        flex: 4,
        fontSize: 18,
        color: 'rgba(0,0,0,0.8)'
    },
    content_price: {
        flex: 1.4,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)'
    },
});


const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(MenuPage);
