import i18next from 'i18next';
import React, { useState } from 'react';
import ChangeLanguage from '../components/ChangeLanguage';
import NavBar from '../components/NavBar';
import NavIcon from '../components/NavBar/NavIcon';
import NavText from '../components/NavBar/NavText';
import {
    faArrowCircleDown,
    faFlag,
    faSignInAlt,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import '../styles/body.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { usePageContext } from '../components/PageContext';
import SEO from '../components/SEO';

import enPresentation from '../locales/en/presentation.json';
import frPresentation from '../locales/fr/presentation.json';

i18next.addResourceBundle('en', 'translation', enPresentation);
i18next.addResourceBundle('fr', 'translation', frPresentation);

function PresentationPage() {
    const { t } = useTranslation();
    const [langExpanded, setLangExpanded] = useState(false);
    const { lang } = usePageContext();

    return (
        <>
            <SEO title={t('presentation')} />

            <ChangeLanguage
                expanded={langExpanded}
                setExpanded={setLangExpanded}
            />

            <NavBar>
                <NavIcon name="haspe" href="/" />
                <NavText
                    text={t('lang')}
                    icon={faFlag}
                    onClick={() => setLangExpanded(prevState => !prevState)}
                />
                <NavText
                    text={t('register')}
                    icon={faUserPlus}
                    options={{
                        type: 'link',
                        url: `/${lang}/register`,
                        linkType: 'router',
                    }}
                />
                <NavText
                    text={t('login')}
                    icon={faSignInAlt}
                    options={{
                        type: 'link',
                        url: `/${lang}/login`,
                        linkType: 'router',
                    }}
                />
            </NavBar>

            <div id="name-slogan">
                <h1>HASPE</h1>
                <p>Change Now</p>
            </div>
            <div id="arrow-presentation">
                <p>{t('discover')}</p>
                <FontAwesomeIcon
                    id="arrow-circle-down"
                    icon={faArrowCircleDown}
                />
            </div>
        </>
    );
}

export default PresentationPage;
