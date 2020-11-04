import { Language } from '@/models/Language';

export const userDefaultLocale: string =
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.navigator.userLanguage || window.navigator.language;

export const getDefaultLanguage = (
    userLocale: string,
    languages: Language[],
    fallBackLanguageCode: string
) => {
    const userLangCode = userLocale.substring(0, 2);
    let language = languages.find(({ culture }) => culture === userLocale);
    if (language) {
        return language;
    }

    language = languages.find(({ code }) => code === userLangCode);

    if (language) {
        return language;
    }

    language = languages.find(({ code }) => code === fallBackLanguageCode);

    return language || languages[0];
};
