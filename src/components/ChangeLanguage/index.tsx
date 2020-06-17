import i18next from 'i18next';
import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import languages from '../../locales/languages';
import styles from './index.module.scss';
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
    const { t } = useTranslation();

    const cssClasses = classNames(
        styles.container,
        {
            [styles.invisible]: !expanded,
        });

    return (
        <div className={cssClasses}>
            <Center noSpacing withoutNav>
                <div
                    className={styles.exitBtn}
                    onClick={() => setExpanded(prevState => !prevState)}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                <div className={styles.languagesBody}>
                    <h1>{t('languages')}</h1>
                    <h3>{t('available sentence')}</h3>
                    <div className={styles.languagesContainer}>
                        {languages.map(lang => (
                            <LanguageTile
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
