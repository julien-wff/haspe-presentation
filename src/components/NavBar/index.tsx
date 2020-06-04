import i18next from 'i18next';
import React, {
    MouseEvent,
    MutableRefObject,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useWindowWidth } from '../../hooks/window';
import { bpPhone } from '../../styles/breakpoints';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

import enHeader from '../../locales/en/header.json';
import frHeader from '../../locales/fr/header.json';

i18next.addResourceBundle('en', 'translation', enHeader);
i18next.addResourceBundle('fr', 'translation', frHeader);

interface Props {
    children: ReactNode;
}

function NavBar({ children }: Props) {

    const [ mobileDeployed, setMobileDeployed ] = useState(false);
    const [ navHeight, setNavHeight ] = useState(0);
    const windowWidth = useWindowWidth();

    const navEl: MutableRefObject<HTMLDivElement> = useRef() as any;

    const { t } = useTranslation();

    useEffect(() => {
        // Set the navHeight var according to the nav element
        const navHeight = navEl.current.scrollHeight;
        setNavHeight(navHeight);
    }, [ windowWidth, navEl ]);

    useEffect(() => {
        // Remove the "deployed" style if the screen switch to tablet size
        if (windowWidth > bpPhone && mobileDeployed) {
            setMobileDeployed(false);
        }
    }, [ windowWidth, mobileDeployed ]);

    function handleNavClick(e: MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLDivElement;
        if (target.id === 'navbar' || target.id === 'menu-bar')
            // Prevent from being triggered by a nav element
            setMobileDeployed(prevState => !prevState);
    }

    //TODO: make menu draggable

    return (
        <nav
            style={{
                top: mobileDeployed ? `calc(100vh - ${navHeight}px)` : '',
            }}
            ref={navEl}
            className={styles.navbar}
            onClick={handleNavClick}>
            <div className={styles.menuBar}>
                <FontAwesomeIcon icon={faBars}/>
                {t('menu')}
            </div>
            {children}
        </nav>
    );
}

export default NavBar;
