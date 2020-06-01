import React from 'react';
import classNames from 'classnames';
import './NavIcon.scss';

import logoHaspe from '../../images/logo-haspe.png';

interface Props {
    name: 'haspe' | 'moonlight';
    mobileVisible?: boolean;
    float?: 'right' | 'left';
    href?: string;
}

function NavIcon({ name, mobileVisible = false, float = 'left', href }: Props) {
    const cssClasses = classNames(
        {
            'mobile-visible': mobileVisible,
        },
        `float-${float}`,
    );

    if (href)
        return (
            <a href={href} id="nav-icon" className={cssClasses}>
                <img src={logoHaspe} alt={`logo ${name}`} />
            </a>
        );
    else
        return (
            <img
                src={logoHaspe}
                alt={`logo ${name}`}
                id="nav-icon"
                className={cssClasses}
            />
        );
}

export default NavIcon;
