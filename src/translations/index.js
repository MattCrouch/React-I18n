import en from './en';
import enGb from './en-gb';
import fr from './fr';
import es from './es';

// Split up language code into each part
function getSubtags(languageCode) {
  return languageCode.split('-');
}

// Get the language from the language code
function getLanguage(languageCode) {
  const subtags = getSubtags(languageCode);
  
  return subtags[0];
}

// Get all other subtags from a provided language code
function getVariants(languageCode) {
  const subtags = getSubtags(languageCode);
  
  subtags.splice(0, 1);
  
  return subtags;
}

// Return the translations for the language provided
export function getTranslations(languageCode) {
  // Adjust for variations in case for different browsers
  const code = languageCode.toLowerCase();
  
  const language = getLanguage(code);
  
  // Combine the rest of the subtags to check for variants present in the app
  let withVariants = language;
  if(getVariants(code).length > 0) {
    withVariants = language + '-' + getVariants(code).join('-');
  }
  
  switch(language) {
    case 'en':
      // Use British English if requested
      if(withVariants === 'en-gb') {
        return enGb;
      }
      return en;
    case 'fr':
      return fr;
    case 'es':
      return es;
    default:
      // Default to English
      return en;
  }
}