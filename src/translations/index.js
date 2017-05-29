import en from './en';
import enGb from './en-gb';
import fr from './fr';
import es from './es';

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

    let withVariants = language;
    if(getVariants(code).length > 0) {
        withVariants = language + '-' + getVariants(code).join('-');
    }

    switch(language) {
        case 'en':
            if(withVariants === 'en-gb') {
                return enGb;
            }
            return en;
        case 'fr':
            return fr;
        case 'es':
            return es;
        default:
            return false;
    }
}