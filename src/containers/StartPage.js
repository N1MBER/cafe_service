import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import {
    View,
    Text,
    DeckSwiper,
    CardItem,
    Card,
    Icon,
    Left,
    Body,
    Thumbnail,
    Button
} from 'native-base';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Image
} from 'react-native';
import {AppStyle} from '../store/values/app_style';
import {set_page, set_page_tittle} from '../actions/tittle_manager';
import MenuPage from './MenuPage';
import {set_prev_page} from '../store/reducers/tittle_reducer';
import {main_page_image} from '../store/values/app_values';

const windowWidth = Dimensions.get('window').width;

class StartPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <View>
                <View style={styles.title_container}>
                    <View style={styles.title_line}/>
                    <Text style={styles.tittle_text}>{page.values.header.tittle.cafe}</Text>
                    <View style={styles.title_line}/>
                </View>
                <View style={styles.image_container}>
                    <DeckSwiper
                        dataSource={main_page_image}
                        renderItem={item =>
                            <Card style={styles.deck_swiper}>
                                <CardItem style={styles.card_title}>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text style={styles.card_text}>{item.text}</Text>
                                            <Text note style={styles.card_note}>{page.values.header.tittle.cafe}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={styles.card_image} source={item.image} />
                                </CardItem>
                                <CardItem style={styles.card_title}>
                                    <Icon name="heart" style={styles.card_icon } />
                                    <Text style={styles.card_text}>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
                <View style={styles.menu_button_container}>
                    <Button style={styles.menu_button} onPress={() => {
                        this.props.set_page_tittle(page.values.header.tittle.menu);
                        this.props.set_page(MenuPage);
                        set_prev_page(StartPage)
                    }}>
                        <Text style={styles.menu_button_text}>{page.values.start_page.our_menu}</Text>
                    </Button>
                </View>
                <View style={styles.feedback_title}>
                    <Text style={styles.feedback_title_text}>{page.values.start_page.feedback}</Text>
                </View>
                <View style={styles.feedback_container}>
                    <View>
                        <Image style={styles.feedback_image} source={require('../images/backgrounds/rate_back.png')}/>
                        <View style={styles.feedback_icon_container}>
                            <Icon style={styles.feedback_icon} name='ios-chatbubbles'/>
                        </View>
                        <Text style={styles.feedback_text}>{page.values.start_page.rate}</Text>
                    </View>
                </View>
                <View style={styles.title_container}>
                    <View style={styles.title_line}/>
                    <Text style={styles.tittle_text}>{page.values.header.tittle.cafe}</Text>
                    <View style={styles.title_line}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title_container: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 50,
        alignItems: 'center'
    },
    tittle_text: {
        alignSelf:'center',
        paddingHorizontal:5,
        fontSize: 50,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    title_line: {
        backgroundColor: 'black',
        height: 2,
        flex: 1,
        alignSelf: 'center'
    },
    image_container: {
        height: 450,
        width: windowWidth * 0.95
    },
    deck_swiper: {
        marginLeft: 0.025 * windowWidth,
    },
    card_title: {
        backgroundColor: AppStyle.colors.gray
    },
    card_note: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)'
    },
    card_text: {
        fontSize: 20,
        color: AppStyle.colors.white
    },
    card_image: {
        height: 300,
        flex: 1
    },
    card_icon: {
        color: AppStyle.colors.red
    },
    menu_button_container:{
        marginBottom: 40,
        marginTop:20
    },
    menu_button: {
        marginLeft: 0.025 * windowWidth,
        width: 0.95* windowWidth,
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: AppStyle.colors.yellow,
        borderRadius: 30,
    },
    menu_button_text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: AppStyle.colors.blue_gray
    },
    feedback_title_text:{
        color: 'rgba(255,255,255,0.8)',
        fontSize: 25,
        fontWeight: 'bold',
    },
    feedback_title:{
        padding: 10,
        backgroundColor: AppStyle.colors.blue_gray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.38,
        shadowRadius: 6.00,
        marginBottom: 15,
        elevation: 14,
    },
    feedback_container: {
        backgroundColor: AppStyle.colors.gray,
        width: 0.9 * windowWidth,
        marginLeft: 0.05 * windowWidth,
        borderRadius: 40,
    },
    feedback_icon_container: {
        left: 0.35*windowWidth,
        top: 0.025 * windowWidth,
        position: 'absolute',
        backgroundColor: AppStyle.colors.white,
        width: 0.25 * windowWidth,
        height: 0.25 * windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60
    },
    feedback_icon: {
        fontSize: 0.2 * windowWidth,
        color: 'black'
    },
    feedback_text: {
        fontSize: 25,
        padding: 10,
        fontWeight: 'bold',
        color: AppStyle.colors.white,
        textAlign: 'center'
    },
    feedback_image: {
        borderTopLeftRadius:40,
        borderTopRightRadius: 40,
        width: 0.9*windowWidth,
        height: 0.3*windowWidth,
        opacity: 0.4
    },
});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        set_page_tittle: tittle => dispatch(set_page_tittle(tittle)),
        set_page: page => dispatch(set_page(page)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
