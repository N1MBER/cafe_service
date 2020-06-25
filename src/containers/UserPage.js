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
                <Text>My profile</Text>
                <Image source={require('../images/icons/user.png')}/>
                <Text>{page.name !== undefined ? page.name : 'None'}</Text>
                <View style={styles.inside_container}>
                    <View>
                        <Text>Login</Text>
                        <Text style={{color: 'white'}}>
                            {page.login !== undefined ? page.login : 'None'}
                        </Text>
                    </View>
                    <View>
                        <Text>Name</Text>
                        <Text style={{color: 'white'}}>
                            {page.name !== undefined ? page.name : 'None'}
                        </Text>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <Text style={{color: 'white'}}>
                            {page.email !== undefined ? page.email : 'None'}
                        </Text>
                    </View>
                    <View>
                        <Text>Phone</Text>
                        <Text style={{color: 'white'}}>
                            {page.phone_number !== undefined ? page.phone_number : 'None'}
                        </Text>
                    </View>
                    <View>
                        <Button>
                            <Text>Change phone number</Text>
                        </Button>
                    </View>
                    <View>
                        <Button>
                            <Text>Change password</Text>
                        </Button>
                    </View>
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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 0.8 * windowHeight
    },
    inside_container: {
        flex: 3,
        width: windowWidth,
        paddingTop: 10,
        paddingBottom: 10 ,
        backgroundColor: AppStyle.colors.blue_gray,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    logo: {
        fontSize: 250,
        flex: 2,
        color: 'rgba(0,0,0,0.8)',
    },
});


const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(UserPage);
