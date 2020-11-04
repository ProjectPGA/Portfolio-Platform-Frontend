import { Language } from '@/models/Language';
import { getDefaultLanguage } from '@/localization/getDefaultLanguage';

const languages: Language[] = [
    {
        code: 'es',
        name: 'Espanish',
        culture: 'es-ES',
    },
    {
        code: 'en',
        name: 'English',
        culture: 'en-US',
    },
    {
        code: 'sv',
        name: 'Svenska',
        culture: 'sv-SE',
    },
];

describe('getDefaultLanguage', () => {
    describe('given the preferred locale is available', () => {
        it('should find the language definition with matching culture', () => {
            const locale = 'en-US';

            const language = getDefaultLanguage(locale, languages, '');

            expect(language).toBe(languages[1]);
        });
    });

    describe('given the preferred locale is not available', () => {
        it('should find the language definition with matching code', () => {
            const locale = 'sv-FI';

            const language = getDefaultLanguage(locale, languages, '');

            expect(language).toBe(languages[2]);
        });
    });

    describe('given nor the preferred locale or country code is available', () => {
        const fallbackLanguageCode = 'sv';
        it('should return the fallback language', () => {
            const locale = 'fr-FR';

            const language = getDefaultLanguage(
                locale,
                languages,
                fallbackLanguageCode
            );

            expect(language).toBe(languages[2]);
        });
    });

    describe('given nor the preferred locale, country code and fallback locale is available', () => {
        const fallbackLanguageCode = 'es';
        it('should return the first language', () => {
            const locale = 'fr-FR';

            const language = getDefaultLanguage(
                locale,
                languages,
                fallbackLanguageCode
            );

            expect(language).toBe(languages[0]);
        });
    });
});
