import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContext } from '../PageContext';
import styles from './LanguageTile.module.scss';
import { useLocation } from '@reach/router';

interface Props {
    code: string;
    original: string;
}

function LanguageTile({ code, original }: Props) {
    const { t } = useTranslation();
    const { lang } = usePageContext();
    const location = useLocation();

    const redirectURL = location.pathname.replace(`/${lang}/`, `/${code}/`);

    return (
        <a className={styles.languageTile} href={redirectURL} aria-label={`Change language to ${code}`}>
            <h5>{t(`languages list.${code}`)}</h5>
            <h4>{original}</h4>
        </a>
    );
}

export default LanguageTile;
