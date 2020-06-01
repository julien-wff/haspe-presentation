import { Link } from 'gatsby';
import React from 'react';
import './SelectionTile.scss';
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
        <Link className="register-tile" to={`/${lang}/${url}`}>
            <FontAwesomeIcon icon={icon} className="register-icon" />
            <h2>{text}</h2>
        </Link>
    );
}

export default SelectionTile;
