import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {AppStyle} from '../store/values/app_style';
import {
    Icon,
    Text,
    Button,
    Badge
} from 'native-base'
class UserPage extends Component {
    render() {
        const {page, user} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title_text}>My Profile</Text>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={require('../images/icons/user.png')}/>
                    <Text style={styles.image_text}>{user.name !== undefined ? user.name : undefined}</Text>
                </View>
                {user.reservation ?
                    <View style={styles.inside_container}>
                        <View style={styles.info}>
                            <Badge danger><Text>!</Text></Badge>
                            <Text onPress={() =>
                                alert("You have a reservation for\n" +
                                    user.reservation_date + " " + user.reservation_time + '\n' +
                                    user.reservation_city + ' ' + user.reservation_place)}
                                  style={styles.info_title}>Booking time coming soon</Text>
                        </View>
                    </View> :
                    null
                }
                <View style={styles.inside_container}>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Login</Text>
                        <Text style={styles.info_value}>
                            {user.login === undefined || user.login === null ? 'None' : user.login}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Name</Text>
                        <Text style={styles.info_value}>
                            {user.name === undefined || user.name === null ? 'None' : user.name}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Email</Text>
                        <Text style={styles.info_value}>
                            {user.email === undefined || user.email === null ? 'None' : user.email}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Phone</Text>
                        <Text style={styles.info_value}>
                            {user.phone_number === undefined || user.phone_number === null ? 'None' : user.phone_number}
                        </Text>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <Button style={styles.button}>
                        <Text style={styles.button_text}>CHANGE PHONE NUMBER</Text>
                    </Button>
                </View>
                <View style={styles.button_container}>
                    <Button style={styles.button}>
                        <Text style={styles.button_text}>CHANGE PASSWORD</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        justifyContent: 'space-between',
    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 10
    },
    info_title: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: AppStyle.colors.gray,
    },
    info_value: {
        flex: 1,
        fontSize: 20,
        color: AppStyle.colors.gray,
    },
    image: {
        width: 300,
        height: 300,
        paddingBottom: 20
    },
    title_text: {
        fontSize: 30,
        color: AppStyle.colors.gray,
        fontWeight: 'bold',
        marginLeft: 20
    },
    image_container: {
        alignItems: 'center',
    },
    image_text: {
        paddingTop: 10,
        fontSize: 20,
        color: AppStyle.colors.gray,
        fontWeight: 'bold',
    },
    inside_container: {
        flexDirection: 'column',
        padding: 20,
        width: 0.95 * windowWidth,
        marginLeft: 0.025 * windowWidth,
        backgroundColor: AppStyle.colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: -5,
        },
        shadowOpacity: 0.38,
        shadowRadius: 6.00,
        borderRadius: 40,
        elevation: 14,
        marginBottom: 20
    },
    button_container:{
        width: 0.8*windowWidth,
        marginLeft: 0.1*windowWidth,
    },
    button:{
        marginTop: 20,
        padding:10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.yellow,
        borderRadius: 40,
    },
    button_text: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});


const mapStateToProps = store => {
    return {
        page: store.page,
        user: store.user,
    }
};

export default connect(mapStateToProps)(UserPage);
