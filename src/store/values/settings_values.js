import {russian_language} from './Localization/russian_language';
import {english_language} from './Localization/english_language';

export const settings_values = {
    spb: 'Saint-Petersburg',
    msk: 'Moscow',
    ivn: 'Ivanovo',
    kzn: 'Kazan\''
};
export const CITIES = ['None','Saint-Petersburg','Moscow','Ivanovo','Kazan','Cancel'];
export const PLACES = [
    [],
    ['Nevskiy prospect', 'Moskovskiy prospect', 'Birzhevaja street'],
    ['Tverskaya street', 'Klenvij bulvar', 'Voznesenskiy pereulok'],
    ['Prospekt Lenina', 'Ermaka street'],
    ['Baumana street', 'Pushkina street'],
]
export const LANGUAGES = [['Русский', 'English', 'Deutsch', '中文', 'Cancel'],[russian_language, english_language]]
