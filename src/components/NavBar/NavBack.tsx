import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowCircleLeft,
    faArrowLeft,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import './NavBack.scss';

interface Props {
    iconStyle: 'arrow' | 'arrow-circle';
    float: 'right' | 'left';
}

function NavBack({ iconStyle, float }: Props) {
    let icon: IconDefinition;

    switch (iconStyle) {
        case 'arrow':
            icon = faArrowLeft;
            break;
        case 'arrow-circle':
            icon = faArrowCircleLeft;
            break;
    }

    return (
        <div
            id="nav-back"
            className={`float-${float}`}
            onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={icon} />
        </div>
    );
}

export default NavBack;
