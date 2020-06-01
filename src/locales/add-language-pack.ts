import i18next from 'i18next';

interface LanguagePack {
    [lang: string]: {
        [key: string]: LanguageElement;
    };
}

type LanguageElement = { [key: string]: string | LanguageElement };

export default function addLanguagePack(pack: any) {
    Object.keys(pack as LanguagePack).forEach(lang => {
        i18next.addResourceBundle(lang, 'translation', pack[lang]);
    });
}
