import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Header,
    View,
    Button,
    Icon, Left, Body, Title, Right,
} from 'native-base';

class AppHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {style, page} = this.props;
        return (
            <View>
                <Header >
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{page.header_name}</Title>
                    </Body>
                    <Right />
                </Header>
            </View>
        );
    }
}

const mapStateToProps = store => {
    return {
        style: store.style,
        page: store.page
    }
};


export default connect(mapStateToProps)(AppHeader)
