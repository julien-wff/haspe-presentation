import React, { ChangeEvent, FormEvent, useState } from 'react';
import './login.scss';
import '../styles/body.scss';
import InputField from '../components/Form/InputField';
import { useTranslation } from 'react-i18next';
import NavBar from '../components/NavBar';
import NavIcon from '../components/NavBar/NavIcon';
import Center from '../components/Center';
import NavText from '../components/NavBar/NavText';
import { faFlag, faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import ChangeLanguage from '../components/ChangeLanguage';
import { Link } from 'gatsby';
import { usePageContext } from '../components/PageContext';

import i18next from 'i18next';
import SEO from '../components/SEO';
import frLoginPage from '../locales/fr/login-page.json';
import enLoginPage from '../locales/en/login-page.json';

i18next.addResourceBundle('fr', 'translation', frLoginPage);
i18next.addResourceBundle('en', 'translation', enLoginPage);

function LoginPage() {
    const { t } = useTranslation();
    const { lang } = usePageContext();
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [langExpanded, setLangExpanded] = useState(false);

    function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
        const { value, attributes } = evt.target;
        const key = attributes.getNamedItem('name')?.value!;
        setCredentials(prevState => ({ ...prevState, [key]: value }));
    }

    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Submitting login form with credentials:\n', credentials);
    }

    return (
        <>
            <SEO title={t('sign in')} />

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
                    icon={faSignInAlt}
                    options={{
                        type: 'link',
                        url: `/${lang}/register`,
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

            <Center>
                <div id="login-form">
                    <h1>{t('sign in')}</h1>
                    <form onSubmit={handleFormSubmit}>
                        <InputField
                            type="email"
                            label={t('email')}
                            onChange={handleInputChange}
                            autoFocus
                            required
                        />
                        <InputField
                            type="password"
                            label={t('password')}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="submit"
                            value={t('login submit') as string}
                        />
                    </form>
                    <Link
                        className="link padding-bottom-30px"
                        to={`/${lang}/forgotten-pass`}>
                        {t('forgotten password')}
                    </Link>
                    <Link className="link" to={`/${lang}/register`}>
                        {t('create account')}
                    </Link>
                </div>
            </Center>
        </>
    );
}

export default LoginPage;
