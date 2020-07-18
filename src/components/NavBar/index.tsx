import i18next from 'i18next';
import React, {
    ReactNode,
} from 'react';
import styles from './index.module.scss';

import enHeader from '../../locales/en/header.json';
import frHeader from '../../locales/fr/header.json';

i18next.addResourceBundle('en', 'translation', enHeader);
i18next.addResourceBundle('fr', 'translation', frHeader);

interface Props {
    children: ReactNode;
}

function NavBar({ children }: Props) {

    return (
        <nav className={styles.navbar}>
            {children}
        </nav>
    );
}

export default NavBar;
