import React, { Component } from 'react';
import {
    Text,
    Form,
    View,
    Item,
    Label,
    DatePicker,
    Root,
    List,
    Picker,
    Icon,
    Button,
    ListItem,
    ActionSheet
} from 'native-base';
import {
    TextInput
} from 'react-native'
import {connect} from 'react-redux';
import {DATE_TIME} from '../store/values/app_values';
import {set_reservation_date, set_reservation_time} from '../actions/user_actions';

class ReservationPage extends Component {
    constructor(props){
        super(props);
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.props.set_reservation_date(newDate)
    }
    render() {
        const {page, user} = this.props;
        return (
            <View>
               <View>
                   <Form>
                       <View>
                           <Item floatingLabel>
                               <Label>Your name</Label>
                               <TextInput />
                           </Item>
                       </View>
                       <View>
                           <Item floatingLabel>
                               <Label>Phone number</Label>
                               <TextInput keyboardType={'phone-pad'} />
                           </Item>
                       </View>
                       <View>
                           <DatePicker
                           defaultDate={new Date()}
                           locale={"en"}
                           textStyle={{ color: "green" }}
                           animationType={"slide"}
                           onDateChange={this.setDate}
                           placeHolderText="Select date"/>
                       </View>
                       <View>
                           <Root>
                               <View >
                                   <View>
                                       <Item picker>
                                           <Picker
                                               mode="dropdown"
                                               iosIcon={<Icon name="arrow-down" />}
                                               style={{ width: undefined }}
                                               placeholder="Pick time"
                                               placeholderStyle={{ color: "#bfc6ea" }}
                                               placeholderIconColor="#007aff"
                                               onValueChange={this.props.set_reservation_time}
                                           >
                                               {DATE_TIME.map((item, key) => (
                                                   <Picker.Item label={item} value={item} />
                                               ))}
                                           </Picker>
                                       </Item>
                                   </View>
                               </View>
                           </Root>
                       </View>
                       <View>
                           <View>
                               <Text>Date:</Text>
                           </View>
                           <View>
                               <Text>
                                   {user.reservation_date !== null ? user.reservation_date.toDateString() :
                                       'Not chosen'}
                               </Text>
                           </View>
                           <View>
                               <Text>Time: </Text>
                           </View>
                           <View>
                               <Text>
                                   {user.reservation_time !== null ? user.reservation_time :
                                       'Not chosen'}
                               </Text>
                           </View>
                       </View>
                       <View>
                           <TextInput
                               autoCorrect={true}
                               multiline={true}
                               numberOfLines={10}
                               placeholder={'Your recommendation'}
                               />
                       </View>
                       <View>
                           <Button>
                               <View>
                                   <View>
                                       <Icon name={'ios-clock'}/>
                                   </View>
                                   <View>
                                       <Text>Reservation</Text>
                                   </View>
                               </View>
                           </Button>
                       </View>
                   </Form>
               </View>
            </View>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
        user: store.user,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        set_reservation_date: date => dispatch(set_reservation_date(date)),
        set_reservation_time: time => dispatch(set_reservation_time(time)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationPage);
