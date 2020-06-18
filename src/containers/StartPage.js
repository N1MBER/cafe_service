import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {ScrollView} from 'react-native'
import {View} from 'native-base';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
class StartPage extends Component {
    render() {
        const {page} = this.props;
        return (
            <Content>
                <View style={{backgroundColor: 'red',
                    height: 200}}>
                    <Text style={AppStyle.footer.icon}>
                        This is Content Section
                    </Text>
                </View>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic" >
                    <View >
                        <View >
                            <Text >Step One</Text>
                            <Text >
                                Edit <Text >App.js</Text> to change this
                                screen and then come back to see your edits.
                            </Text>
                        </View>
                        <View >
                            <Text>See Your Changes</Text>
                            <Text >
                                <ReloadInstructions />
                            </Text>
                        </View>
                        <View >
                            <Text >Debug</Text>
                            <Text >
                                <DebugInstructions />
                            </Text>
                        </View>
                        <View >
                            <Text>Learn More</Text>
                            <Text >
                                Read the docs to discover what to do next:
                            </Text>
                        </View>
                        <LearnMoreLinks />
                    </View>
                </ScrollView>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(mapStateToProps)(StartPage);
const AppStyle = {
    footer:{
        icon:{
            fontSize: 50
        }
    }
};
