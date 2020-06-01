import i18n from 'i18next';

i18n.init(
    {
        resources: {
            en: { translation: {} },
            fr: { translation: {} },
        },
        fallbackLng: ['en', 'fr'],
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    },
    () => void 0,
).catch(console.error);

export default i18n;
