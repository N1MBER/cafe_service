import React, { Component } from 'react';
import {
    Text,
    Form,
    View,
    Item,
    DatePicker,
    Root,
    Picker,
    Icon,
    Button,
    ActionSheet
} from 'native-base';
import {
    Dimensions,
    StyleSheet,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {DATE_TIME} from '../store/values/app_values';
import {
    set_reservation_city,
    set_reservation_date, set_reservation_name, set_reservation_phone_number,
    set_reservation_place,
    set_reservation_time, set_wishes,
} from '../actions/user_actions';
import {AppStyle} from '../store/values/app_style';
import {CITIES, PLACES} from '../store/values/settings_values';

const windowWidth = Dimensions.get('window').width;
const date = new Date();

class ReservationPage extends Component {
    constructor(props){
        super(props);
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.props.set_reservation_date(newDate)
    }

    check_data(name, number, date, time, city, place, wishes, notification){
        if(!(!/^(-?\d+)([.,]\d+)?$/.test(name))){
            alert(notification.name);
            return false;
        }else if(!/^(-?\d+)([.,]\d+)?$/.test(number)){
            alert(notification.phone_number);
            return false;
        }
        else if(date === null || time == null || city === null || place === null){
            alert(notification.time_and_place);
            return false;
        }
        return true;
    }

    render() {
        const {page, user, settings} = this.props;
        return (
                <View style={styles.container}>
                   <Form>
                       <View>
                           <View style={styles.item_title}>
                               <Icon name='ios-contact' style={styles.title_icon}/>
                               <Text style={styles.title_text}>{page.values.reservation_page.form.contact_data}</Text>
                           </View>
                           <View style={styles.input_container}>
                               <View>
                                   <Item >
                                       <TextInput style={styles.input_field}
                                           placeholder={page.values.reservation_page.form.name}
                                           onChangeText={text => this.props.set_reservation_name(text)}/>
                                   </Item>
                               </View>
                               <View>
                                   <Item >
                                   <TextInput style={styles.input_field}
                                              placeholder={page.values.reservation_page.form.phone}
                                              onChangeText={text => this.props.set_reservation_phone_number(text)}
                                              keyboardType={'phone-pad'} />
                                   </Item>
                               </View>
                           </View>
                       </View>
                       <View>
                           <View style={styles.item_title}>
                               <Icon name='ios-timer' style={styles.title_icon}/>
                               <Text style={styles.title_text}>{page.values.reservation_page.form.booking_time}</Text>
                           </View>
                           <View style={styles.select_date}>
                               <DatePicker
                                   mode="date"
                                   confirmBtnText="Confirm"
                                   cancelBtnText="Cancel"
                                   minimumDate={new Date()}
                                   defaultDate={new Date()}
                                   maximumDate={new Date(date.getFullYear(), date.getMonth() + 2, 31)}
                                   locale={"en"}
                                   modalTransparent={false}
                                   androidMode="default"
                                   textStyle={styles.date_picker}
                                   animationType={"slide"}
                                   onDateChange={this.setDate}
                                   placeHolderText={page.values.reservation_page.form.select_date}>
                                   placeHolderTextStyle={styles.date_picker}
                               </DatePicker>
                           </View>
                           <View >
                               <Root>
                                   <View style={styles.time_container}>
                                       <Item picker>
                                           <Picker
                                               mode="dropdown"
                                               iosHeader={page.values.reservation_page.form.select_time}
                                               style={styles.time_picker}
                                               placeholder={page.values.reservation_page.form.pick_me}
                                               selectedValue={user.reservation_time === null ? undefined : user.reservation_time}
                                               placeholderStyle={{color: 'black',
                                                   fontSize: 15}}
                                               placeholderIconColor="#007aff"
                                               onValueChange={this.props.set_reservation_time}
                                           >
                                               {DATE_TIME.map((item) => (
                                                   <Picker.Item  label={item} value={item} />))}
                                           </Picker>
                                       </Item>
                                   </View>
                               </Root>
                           </View>
                           <View style={{marginBottom: 10, paddingLeft: 10}}>
                               <View style={styles.result_time_container}>
                                   <View>
                                       <Text style={styles.result_time_text}>{page.values.reservation_page.form.date}</Text>
                                   </View>
                                   <View>
                                       <Text style={styles.result_time_value}>
                                           {user.reservation_date !== null ? user.reservation_date.toDateString() :
                                               page.values.reservation_page.form.not_chosen}
                                       </Text>
                                   </View>
                               </View>
                               <View style={styles.result_time_container}>
                                   <View>
                                       <Text style={styles.result_time_text}>{page.values.reservation_page.form.time}</Text>
                                   </View>
                                   <View>
                                       <Text style={styles.result_time_value}>
                                           {user.reservation_time !== null ? user.reservation_time :
                                               page.values.reservation_page.form.not_chosen}
                                       </Text>
                                   </View>
                               </View>
                           </View>
                       </View>
                       <View>
                           <View style={styles.item_title}>
                               <Icon name='ios-map' style={styles.title_icon}/>
                               <Text style={styles.title_text}>{page.values.header.tittle.cafe}</Text>
                           </View>
                           {(settings.default_city === null || settings.default_city === undefined || settings.default_city === 'None')?
                               <Button style={styles.select_city_button} onPress={()=>
                                   ActionSheet.show({
                                           options: CITIES,
                                           title: page.values.reservation_page.form.cities,
                                           cancelButtonIndex: CITIES.length - 1
                                       },
                                       buttonIndex => {
                                           if(buttonIndex !== CITIES.length - 1)
                                               this.props.set_reservation_city( CITIES[buttonIndex] );
                                       }
                                   )}>
                                   <Text style={styles.select_city_text}> {page.values.reservation_page.form.select_city}</Text>
                               </Button> : undefined
                           }

                           {!(user.reservation_city === null || user.reservation_city === undefined || user.reservation_city === 'None' ) ?
                               <Button style={styles.select_city_button} onPress={()=>
                                   ActionSheet.show({
                                           options: PLACES[CITIES.indexOf(user.reservation_city)],
                                           title: page.values.header.tittle.cafe,
                                       },
                                       buttonIndex => {
                                               this.props.set_reservation_place( PLACES[CITIES.indexOf(user.reservation_city)][buttonIndex] );
                                       }
                                   )}>
                                   <Text style={styles.select_city_text}>{page.values.reservation_page.form.select_place}</Text>
                               </Button>:
                               undefined
                           }
                           <View style={{paddingBottom: 10, paddingLeft: 10}}>
                               <View style={styles.result_time_container}>
                                   <Text style={styles.result_time_text}>{page.values.reservation_page.form.place}</Text>
                                   <Text style={styles.result_time_value}>
                                       {user.reservation_place === null ? page.values.reservation_page.form.choose_place : user.reservation_city + ' ' + user.reservation_place}
                                   </Text>
                               </View>
                           </View>
                       </View>
                       <View>
                           <View style={styles.item_title}>
                               <Icon name='ios-create' style={styles.title_icon}/>
                               <Text style={styles.title_text}>{page.values.reservation_page.form.wishes}</Text>
                           </View>
                           <View style={styles.wishes_container}>
                               <TextInput
                                   style={styles.wishes_input}
                                   autoCorrect={true}
                                   multiline={true}
                                   numberOfLines={10}
                                   onChangeText={text => this.props.set_wishes(text)}
                                   placeholder={page.values.reservation_page.form.your_wishes}
                                   placeholderTextColor={'rgba(0,0,0,0.8)'}
                                   />
                           </View>
                       </View>
                       <View>
                           <Button style={styles.reservation_button}  onPress={() => {
                           this.check_data(user.reservation_name, user.reservation_phone_number,
                           user.reservation_date, user.reservation_time, user.reservation_city,
                           user.reservation_place, user.wishes, page.values.reservation_page.notification)}}>
                               <View style={styles.reservation_button_container}>
                                   <Icon style={styles.reservation_button_icon} name={'ios-clock'}/>
                                   <Text style={styles.reservation_button_text}>{page.values.reservation_page.form.make_reservation}</Text>
                               </View>
                           </Button>
                       </View>
                   </Form>
               </View>
        );
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
        user: store.user,
        settings: store.settings
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyle.colors.white
    },
    select_city_button:{
        marginLeft: 0.025 * windowWidth,
        width: 0.95* windowWidth,
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: AppStyle.colors.yellow,
        borderRadius: 30,
    },
    select_city_text: {
        fontSize: 15,
        color: 'black'
    },
    reservation_button_container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    reservation_button_text:{
        fontSize: 25,
        color: 'white',
    },
    reservation_button_icon:{
        fontSize: 25,
        color: 'white',
        marginRight: 10,
        marginTop: 3
    },
    reservation_button:{
        width: 0.8*windowWidth,
        marginLeft: 0.1 * windowWidth,
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.red,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.38,
        shadowRadius: 6.00,

        elevation: 14,
    },
    wishes_container:{
        margin: 15,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.8)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.38,
        shadowRadius: 6.00,
        borderRadius: 20,
        elevation: 14,
        marginBottom: 30
    },
    wishes_input:{
        paddingTop: 20,
        padding: 20
    },
    result_time_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    result_time_text:{
        fontSize: 25,
        paddingRight: 10
    },
    result_time_value:{
        fontSize: 20
    },
    item_title:{
        padding: 10,
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
    input_field: {
        fontSize: 24,
        color: AppStyle.colors.gray,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 10
    },
    title_text:{
        color: 'rgba(255,255,255,0.8)',
        fontSize: 25,
        fontWeight: 'bold'
    },
    select_date:{
        marginLeft: 0.025 * windowWidth,
        width: 0.95* windowWidth,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: AppStyle.colors.yellow,
        borderRadius: 30,
        marginBottom: 20,

    },
    date_picker:{
        color: 'rgba(0,0,0,0.8)',
        fontSize: 15,
        fontWeight: 'bold'
    },
    title_icon: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 30,
        paddingRight: 10
    },
    time_container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    time_picker: {
        marginLeft: 0.025 * windowWidth,
        width: 0.95* windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppStyle.colors.yellow,
        borderRadius: 30,
        marginBottom: 20,
    },
    input_container:{
        width: windowWidth,
        paddingTop: 10,
        paddingBottom: 10
    },

});

const mapDispatchToProps = dispatch => {
    return{
        set_reservation_date: date => dispatch(set_reservation_date(date)),
        set_reservation_time: time => dispatch(set_reservation_time(time)),
        set_reservation_place: place => dispatch(set_reservation_place(place)),
        set_reservation_city: city => dispatch(set_reservation_city(city)),
        set_reservation_name: name => dispatch(set_reservation_name(name)),
        set_reservation_phone_number:number => dispatch(set_reservation_phone_number(number)),
        set_wishes: wishes => dispatch(set_wishes(wishes)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationPage);
