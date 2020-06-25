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
    Button
} from 'native-base'
class UserPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title_text}>My Profile</Text>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={require('../images/icons/user.png')}/>
                    <Text style={styles.image_text}>{page.name !== undefined ? page.name : undefined}</Text>
                </View>
                <View style={styles.inside_container}>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Login</Text>
                        <Text style={styles.info_value}>
                            {page.login !== undefined ? page.login : 'None'}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Name</Text>
                        <Text style={styles.info_value}>
                            {page.name !== undefined ? page.name : 'None'}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Email</Text>
                        <Text style={styles.info_value}>
                            {page.email !== undefined ? page.email : 'None'}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.info_title}>Phone</Text>
                        <Text style={styles.info_value}>
                            {page.phone_number !== undefined ? page.phone_number : 'None'}
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
        page: store.page
    }
};

export default connect(mapStateToProps)(UserPage);
