import React, { Component } from 'react';
import {
    Content,
    Item,
    Label,
    Input,
    Form
}from 'native-base';

import {connect} from 'react-redux';
import IconMapper from './IconMapper';
class LoginForm extends Component {
    render() {
        const {style} = this.props;
        return (
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Email or username</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input/>
                    </Item>
                </Form>
            </Content>
        );
    }
}

const mapStateToProps = store => {
    return {
        style: store.style,
        page: store.page
    }
};

export default connect(mapStateToProps)(LoginForm);
