import en from './en';
import enGb from './en-gb';

function getSubtags(languageCode) {
    return languageCode.split('-');
}

function getLanguage(languageCode) {
    const subtags = getSubtags(languageCode);

    return subtags[0];
}

function getVariants(languageCode) {
    const subtags = getSubtags(languageCode);
    
    subtags.splice(0, 1);

    return subtags;
}

export function getTranslations(languageCode) {
    const code = languageCode.toLowerCase();

    const language = getLanguage(code);
    const withVariants = language + '-' + getVariants(code).join('-');

    console.log(withVariants);

    switch(language) {
        case 'en':
            if(withVariants === 'en-gb') {
                return enGb;
            }
            return en;
        default:
            return false;
    }
}