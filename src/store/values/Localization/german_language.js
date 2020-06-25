import {ENG_MENU, ENG_POSITION} from '../cafe_menu';

export const german_language = {
    header:{
        tittle:{
            cafe: 'Cafeteria',
            settings: 'Settings',
            login: 'Sign in',
            register: 'Registration',
            reservation: 'Reservation',
            location: 'Map',
            menu: 'Menu',
            user: 'My profile'
        }
    },
    login_page:{
        form:{
            password: 'Password',
            email: 'Email',
            login: 'LOG IN',
            registration: 'SIGN UP',
            other_variant: 'Sign in with social networks',

        },
        forgot: 'FORGOT PASSWORD?',
        notification:{
            mail_notification: 'Mail entered incorrectly',
            password_notification: 'Password is too short'
        }
    },
    settings_page:{
        language: 'Language',
        notification: 'Notification',
        about_us: 'About us',
        support: 'Support',
        default_city: 'Default city',
        reservation_notification: 'Reservation notification',
        new_position_notification: 'Notification of new positions',
        scrooler_city: 'Default city',
        not_chosen: 'Not chosen',
        report_error: 'Report an error',
        ask_question: 'Ask a Question',
        technology_app: 'Technology for app',
        developer: 'Developer',
        version: 'Version',
        designed: 'Designed by N1MBER in St. Petersburg'
    },
    menu: {
        menu: ENG_MENU,
        position: ENG_POSITION
    },
    registration_page:{
        notification:{
            mail: 'Mail entered incorrectly',
            password: "Password is too short",
            repeat_password: 'Password mismatch',
            phone_number: 'The phone number is entered incorrectly.',
            default_city: 'Please choose default city'
        },
        form:{
            password: 'Password',
            email: 'Email',
            repeat_password: 'Repeat password',
            phone: 'Your phone',
            default_city: 'DEFAULT CITY',
            registration: 'REGISTRATION'
        }
    },
    reservation_page:{
        notification:{
            name: 'The name is entered incorrectly.',
            phone_number: 'The phone number is entered incorrectly.',
            time_and_place: 'No time or place selected.'
        },
        form:{
            contact_data: 'Contact data',
            name: 'Your name',
            phone: 'Phone number',
            booking_time: 'Booking time',
            select_date: 'SELECT DATE',
            pick_me: 'PICK TIME',
            select_time: 'Select time',
            date: 'Date:',
            not_chosen: 'Not chosen',
            time: 'Time:',
            cities: 'Cities',
            select_city: 'SELECT CITY',
            select_place: 'SELECT PLACE',
            place: 'Place:',
            choose_place: 'Please choose a place',
            wishes: 'Wishes to order',
            your_wishes: 'Your wishes',
            make_reservation: 'MAKE A RESERVATION'
        }
    },
    start_page:{
        our_menu: 'OUR MENU',
        feedback: 'Give feedback',
        rate: 'Rate visit'
    },
    user_page: {
        my_profile: 'My Profile',
        notification_reservation: 'You have a reservation for',
        booking_time: 'Booking time coming soon',
        login: 'Login',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        change_phone: 'CHANGE PHONE NUMBER',
        change_password: 'CHANGE PASSWORD',
        none: 'None'
    },
    icon:{
        login_page: {
            person: '../images/icons/user.png',
        }
    }
};
