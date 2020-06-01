import i18next from 'i18next';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import languages from '../../locales/languages';
import './index.scss';
import LanguageTile from './LanguageTile';
import Center from '../Center';

import enLanguages from '../../locales/en/languages.json';
import frLanguages from '../../locales/fr/languages.json';
i18next.addResourceBundle('en', 'translation', enLanguages);
i18next.addResourceBundle('fr', 'translation', frLanguages);

interface Props {
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
}

function ChangeLanguage({ expanded, setExpanded }: Props) {
    const { t, i18n } = useTranslation();

    const cssClasses = classNames({
        invisible: !expanded,
    });

    async function handleLanguageTileClick(code: string) {
        await i18n.changeLanguage(code);
        setExpanded(false);
    }

    return (
        <div id="change-language-container" className={cssClasses}>
            <Center noSpacing withoutNav>
                <div
                    id="language-exit"
                    onClick={() => setExpanded(prevState => !prevState)}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div id="languages-body">
                    <h1>{t('languages')}</h1>
                    <h3>{t('available sentence')}</h3>
                    <div id="languages-container">
                        {languages.map(lang => (
                            <LanguageTile
                                onClick={handleLanguageTileClick}
                                code={lang.code}
                                original={lang.original}
                                key={lang.code}
                            />
                        ))}
                    </div>
                    <h3>
                        {t('lang not found.not seen')}{' '}
                        <a
                            href="mailto:cefadrom1@gmail.com?subject=Missing lang"
                            className="link">
                            {t('lang not found.ask')}
                        </a>
                    </h3>
                </div>
            </Center>
        </div>
    );
}

export default ChangeLanguage;
