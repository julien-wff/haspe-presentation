import React from 'react';
import classNames from 'classnames';
import styles from './NavIcon.module.scss';

import logoHaspe from '../../images/logo-haspe.png';

interface Props {
    name: 'haspe' | 'moonlight';
    mobileVisible?: boolean;
    float?: 'right' | 'left';
    href?: string;
}

function NavIcon({ name, mobileVisible = false, float = 'left', href }: Props) {
    const cssClasses = classNames(
        styles.navIcon,
        {
            [styles.mobileVisible]: mobileVisible,
            [styles.floatRight]: float === 'right',
            [styles.floatLeft]: float === 'left',
        },
    );

    if (href)
        return (
            <a href={href} className={cssClasses}>
                <img src={logoHaspe} alt={`logo ${name}`}/>
            </a>
        );
    else
        return (
            <img
                src={logoHaspe}
                alt={`logo ${name}`}
                className={cssClasses}
            />
        );
}

export default NavIcon;
