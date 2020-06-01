import React, { useState } from 'react';
import ChangeLanguage from '../ChangeLanguage';
import NavIcon from '../NavBar/NavIcon';
import NavText from '../NavBar/NavText';
import { faFlag, faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../NavBar';
import { useTranslation } from 'react-i18next';
import { usePageContext } from '../PageContext';

export default function RegisterNavBar() {
    const { t } = useTranslation();
    const [langExpanded, setLangExpanded] = useState(false);

    const { lang } = usePageContext();

    return (
        <>
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
                    text={t('login')}
                    icon={faSignInAlt}
                    options={{
                        type: 'link',
                        url: `/${lang}/login`,
                        linkType: 'router',
                    }}
                />
                <NavText
                    text={t('home page')}
                    icon={faHome}
                    options={{
                        type: 'link',
                        url: `/${lang}/`,
                        linkType: 'router',
                    }}
                />
            </NavBar>
        </>
    );
}
