import {GER_MENU, GER_POSITION} from '../cafe_menu';

export const german_language = {
    header:{
        tittle:{
            cafe: 'Die Cafeteria',
            settings: 'Die Einstellungen',
            login: 'Einloggen',
            register: 'Anmeldung',
            reservation: 'Reservierung',
            location: 'Karte',
            menu: 'Speisekarte',
            user: 'Mein Profil'
        }
    },
    login_page:{
        form:{
            password: 'Passwort',
            email: 'Email',
            login: 'ANMELDUNG',
            registration: 'ANMELDEN',
            other_variant: 'Melden Sie sich mit sozialen Netzwerken an',

        },
        forgot: 'PASSWORT VERGESSE?',
        notification:{
            mail_notification: 'Mail falsch eingegeben',
            password_notification: 'Das Passwort ist zu kurz'
        }
    },
    settings_page:{
        language: 'Sprache',
        notification: 'Benachrichtigung',
        about_us: 'Über uns',
        support: 'Unterstützung',
        default_city: 'Standardstadt',
        reservation_notification: 'Reservierungsbenachrichtigung',
        new_position_notification: 'Benachrichtigung über neue Positionen',
        scrooler_city: 'Standardstadt',
        not_chosen: 'Nicht gewählt',
        report_error: 'Einen Fehler melden',
        ask_question: 'Stelle eine Frage',
        technology_app: 'Technologie für App',
        developer: 'Entwickler',
        version: 'Ausführung',
        designed: 'Entworfen von N1MBER in St. Petersburg'
    },
    menu: {
        menu: GER_MENU,
        position: GER_POSITION
    },
    registration_page:{
        notification:{
            mail: 'Mail falsch eingegeben',
            password: "Das Passwort ist zu kurz",
            repeat_password: 'Die Passwörter stimmen nicht überei',
            phone_number: 'Die Telefonnummer ist falsch eingegeben',
            default_city: 'Bitte wählen Sie Standardstadt'
        },
        form:{
            password: 'Passwort',
            email: 'Email',
            repeat_password: 'Passwort wiederholen',
            phone: 'Dein Telefon',
            default_city: 'Standardstadt',
            registration: 'ANMELDUNG'
        }
    },
    reservation_page:{
        notification:{
            name: 'Der Name ist falsch eingegeben',
            phone_number: 'Die Telefonnummer ist falsch eingegeben',
            time_and_place: 'Keine Zeit oder Ort ausgewählt'
        },
        form:{
            contact_data: 'Kontaktdaten',
            name: 'Dein Name',
            phone: 'Telefonnummer',
            booking_time: 'Buchungszeit',
            select_date: 'DATUM AUSWÄHLEN',
            pick_me: 'ZEIT AUSWÄHLEN',
            select_time: 'Zeit auswählen',
            date: 'Datum:',
            not_chosen: 'Nicht gewählt',
            time: 'Zeit:',
            cities: 'Städte',
            select_city: 'STADT WÄHLEN',
            select_place: 'PLATZ AUSWÄHLEN',
            place: 'Platz:',
            choose_place: 'Bitte wählen Sie einen Ort',
            wishes: 'Wünsche zu bestellen',
            your_wishes: 'Deine Wünsche',
            make_reservation: 'RESERVIERUNG MACHEN'
        }
    },
    start_page:{
        our_menu: 'UNSER MENÜ',
        feedback: 'Feedback geben',
        rate: 'Besuch bewerten'
    },
    user_page: {
        my_profile: 'Mein Profil',
        notification_reservation: 'Sie haben eine Reservierung für',
        booking_time: 'Buchungszeit kommt bald',
        login: 'Anmeldung',
        name: 'Name',
        email: 'Email',
        phone: 'Telefon',
        change_phone: 'TELEFONNUMMER ÄNDERN',
        change_password: 'ÄNDERE DAS PASSWORT',
        none: 'Keiner'
    },
    icon:{
        login_page: {
            person: '../images/icons/user.png',
        }
    }
};
