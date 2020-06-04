import React, { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageTile.module.scss';

interface Props {
    onClick: (code: string, event: MouseEvent<HTMLDivElement>) => void;
    code: string;
    original: string;
}

function LanguageTile({ onClick, code, original }: Props) {
    const { t } = useTranslation();

    function handleTileClick(event: MouseEvent<HTMLDivElement>) {
        onClick(code, event);
    }

    return (
        <div onClick={handleTileClick} className={styles.languageTile}>
            <h5>{t(`languages list.${code}`)}</h5>
            <h4>{original}</h4>
        </div>
    );
}

export default LanguageTile;
