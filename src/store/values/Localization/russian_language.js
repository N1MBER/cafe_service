import {RUS_MENU, RUS_POSITION} from '../cafe_menu';

export const russian_language = {
    header:{
        tittle:{
            cafe: 'Кафетерий',
            settings: 'Настройки',
            login: 'Вход',
            register: 'Регистрация',
            reservation: 'Бронирование',
            location: 'Карта',
            menu: 'Меню',
            user: 'Профиль'
        }
    },
    login_page:{
        form:{
            password: 'Пароль',
            email: 'Почта',
            login: 'ВОЙТИ',
            registration: 'РЕГИСТРАЦИЯ',
            other_variant: 'Войти через соц. сети',

        },
        forgot: 'ЗАБЫЛИ ПАРОЛЬ?',
        notification:{
            mail_notification: 'Почта введена некорректно.',
            password_notification: 'Пароль слишком короткий.'
        }
    },
    settings_page:{
        language: 'Язык',
        notification: 'Оповещения',
        about_us: 'О нас',
        support: 'Поддержка',
        default_city: 'Город по умолчанию',
        reservation_notification: 'Оповещения о бронировании',
        new_position_notification: 'Оповещения о новинках',
        scrooler_city: 'Город по умолчанию',
        not_chosen: 'Не выбрано',
        report_error: 'Сообщить об ошибке',
        ask_question: 'Задать вопрос',
        technology_app: 'Используемая технология',
        developer: 'Разработчик',
        version: 'Версия',
        designed: 'Разработано N1MBER в Санкт-Петербурге'
    },
    menu: {
        menu: RUS_MENU,
        position: RUS_POSITION
    },
    registration_page:{
        notification:{
            mail: 'Почта введена некорректно.',
            password: "Пароль слишком короткий.",
            repeat_password: 'Пароли не совпадают.',
            phone_number: 'Номер телефона введен некорректно.',
            default_city: 'Пожалуйста выберите город по умолчанию.'
        },
        form:{
            password: 'Пароль',
            email: 'Почта',
            repeat_password: 'Повторите пароль',
            phone: 'Номер телефона',
            default_city: 'ГОРОД ПО УМОЛЧАНИЮ',
            registration: 'РЕГИСТРАЦИЯ'
        }
    },
    reservation_page:{
        notification:{
            name: 'Имя введено некорректно.',
            phone_number: 'Номер телефона введено некорректно.',
            time_and_place: 'Не указанно время или место.'
        },
        form:{
            contact_data: 'Контактная информация',
            name: 'Ваше имя',
            phone: 'Номер телефона',
            booking_time: 'Время бронирования',
            select_date: 'ВЫБРАТЬ ДАТУ',
            pick_me: 'ВЫБРАТЬ ВРЕМЯ',
            select_time: 'Выберите время',
            date: 'Дата:',
            not_chosen: 'Не выбрано',
            time: 'Время:',
            cities: 'Города',
            select_city: 'ВЫБРАТЬ ГОРОД',
            select_place: 'ВЫБРАТЬ МЕСТО',
            place: 'Место:',
            choose_place: 'Пожалуйста выберите место',
            wishes: 'Пожелания к заказу',
            your_wishes: 'Ваши пожелания',
            make_reservation: 'ЗАБРОНИРОВАТЬ'
        }
    },
    start_page:{
        our_menu: 'НАШЕ МЕНЮ',
        feedback: 'Оставить отзыв',
        rate: 'Оценить визит'
    },
    user_page: {
        my_profile: 'Мой профиль',
        notification_reservation: 'У вас есть бронь на',
        booking_time: 'Скоро ваше время бронирования',
        login: 'Логин',
        name: 'Имя',
        email: 'Почта',
        phone: 'Номер телефона',
        change_phone: 'ИЗМЕНИТЬ НОМЕР ТЕЛЕФОНА',
        change_password: 'ИЗМЕНИТЬ ПАРОЛЬ',
        none: 'Не указано'
    },
    icon:{
        login_page: {
            person: '../images/icons/user.png',
        }
    }
};
