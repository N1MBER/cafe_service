import {CHIN_MENU, CHIN_POSITION} from '../cafe_menu';

export const chinese_language = {
    header:{
        tittle:{
            cafe: '自助餐厅',
            settings: '设定值',
            login: '登入',
            register: '注册',
            reservation: '保留',
            location: '地图',
            menu: '菜单',
            user: '我的简历'
        }
    },
    login_page:{
        form:{
            password: '密码',
            email: '电子邮件',
            login: '登录',
            registration: '注册',
            other_variant: '使用社交网络登录',

        },
        forgot: '忘记密码？',
        notification:{
            mail_notification: '邮件输入错误',
            password_notification: '密码太短'
        }
    },
    settings_page:{
        language: '语言',
        notification: '通知',
        about_us: '关于我们',
        support: '支持',
        default_city: '默认城市',
        reservation_notification: '预约通知',
        new_position_notification: '通知新职位',
        scrooler_city: '默认城市',
        not_chosen: '未选择',
        report_error: '报告错误',
        ask_question: '问一个问题',
        technology_app: '应用技术',
        developer: '开发者',
        version: '版',
        designed: '设计的由 N1MBER 在圣彼得堡'
    },
    menu: {
        menu: CHIN_MENU,
        position: CHIN_POSITION
    },
    registration_page:{
        notification:{
            mail: '邮件输入错误',
            password: "密码太短",
            repeat_password: '密码不符合',
            phone_number: '电话号码输入错误。',
            default_city: '请选择默认城市'
        },
        form:{
            password: '密码',
            email: '电子邮件',
            repeat_password: '重复输入密码',
            phone: '您的手机',
            default_city: '默认城市',
            registration: '注册'
        }
    },
    reservation_page:{
        notification:{
            name: '名称输入错误',
            phone_number: '电话号码输入错误',
            time_and_place: '未选择时间或地点',
            reservation: '您已经预订了一个地方'
        },
        form:{
            contact_data: '联络资料',
            name: '你的名字',
            phone: '电话号码',
            booking_time: '预约时间',
            select_date: '选择日期',
            pick_me: '选择时间',
            select_time: '选择时间',
            date: '日期：',
            not_chosen: '未选择',
            time: '时间:',
            cities: '城市',
            select_city: '选择城市',
            select_place: '选择地点',
            place: '地点:',
            choose_place: '请选择一个地方',
            wishes: '希望订购',
            your_wishes: '你的愿望',
            make_reservation: '做一个预约'
        }
    },
    start_page:{
        our_menu: '我们的菜单',
        feedback: '给予反馈',
        rate: '评价造访'
    },
    user_page: {
        my_profile: '我的简历',
        notification_reservation: '您有预订',
        booking_time: '预订时间即将到来',
        login: '登录',
        name: '名称',
        email: '电子邮件',
        phone: '电话',
        change_phone: '更改电话号码',
        change_password: '更改密码',
        none: '没有'
    },
    icon:{
        login_page: {
            person: '../images/icons/user.png',
        }
    }
};
