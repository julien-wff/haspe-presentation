import { Link } from 'gatsby';
import React from 'react';
import styles from './SelectionTile.module.scss';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePageContext } from '../PageContext';

interface Props {
    icon: IconDefinition;
    text: string;
    url: string;
}

function SelectionTile({ icon, text, url }: Props) {

    const { lang } = usePageContext();

    return (
        <Link className={styles.tile} to={`/${lang}/${url}`}>
            <FontAwesomeIcon icon={icon} className={styles.icon}/>
            <h2>{text}</h2>
        </Link>
    );
}

export default SelectionTile;
