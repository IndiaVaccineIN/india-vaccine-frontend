import en_us_locale from "../public/locales/en-us.json"
import hi_in_locale from "../public/locales/gu-in.json"
import gu_in_locale from "../public/locales/gu-in.json"

export const LocalesMap = {
  "en-us": "English",
  "hi-in": "हिंदी",
  "gu-in": "ગુજરાતી",
  "ml-in":"മലയാളം",
  "kn-in":"ಕನ್ನಡ",
  "pa-in":"ਪੰਜਾਬੀ",
  "te-in": "తెలుగు",
  "bn-in": "বাংলা",
  "ta-in": "தமிழ்",
  "mr-in": "मराठी"
};

/**
 * 
 * @param locale The locale whose data is to be fetched
 * @returns 
 */
export const mapLocaleToJSON = (locale: keyof typeof LocalesMap): LocaleSchema => {
  switch (locale) {
    case "en-us": {
      return en_us_locale
    }
    case "gu-in": {
      return gu_in_locale
    }
    case "hi-in": {
      return hi_in_locale
    }
  }
}

/**
 * The schema of the locale
 */
export interface LocaleSchema {
  we: string;
  making: string;
  locate: string;
  description: string;
  join: string;
  learn: string;
  how: string;
  with: string;
  our: string;
  help: string;
  glad: string;
  tech: string;
  techteam: string;
  calling: string;
  callteam: string;
  disclaimer: string;
  check_availability: {
    heading: string;
    text_field_placeholder: string;
    find_vaccine_button: string;
    description: string;
  },
  availability_results: {
    showing: string;
    vaccination_centers: string;
    find_centers_button: string;
  },
  cvc_card: {
    ages: string;
    cost: string;
    vaccine_type: string;
    book_on_cowin: string;
    directions: string;
  }
}
