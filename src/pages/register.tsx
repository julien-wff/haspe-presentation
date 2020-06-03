import React from 'react';
import Center from '../components/Center';
import styles from './register.module.scss';
import '../styles/body.scss';
import {
    faChalkboardTeacher,
    faSchool,
    faUser,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import SelectionTile from '../components/Register/SelectionTile';
import { useTranslation } from 'react-i18next';
import RegisterNavBar from '../components/Register/RegisterNavBar';
import i18next from 'i18next';
import SEO from '../components/SEO';

import frRegisterPage from '../locales/fr/register/register-page.json';
import enRegisterPage from '../locales/en/register/register-page.json';

i18next.addResourceBundle('fr', 'translation', frRegisterPage);
i18next.addResourceBundle('en', 'translation', enRegisterPage);

function RegisterPage() {
    const { t } = useTranslation();

    return (
        <>
            <SEO title={t('create account')} />

            <RegisterNavBar />

            <Center>
                <div className={styles.form}>
                    <h1>{t('who are you')}</h1>
                    <div className={styles.tilesContainer}>
                        <SelectionTile
                            icon={faUserGraduate}
                            text={t('student')}
                            url="register/student"
                        />
                        <SelectionTile
                            icon={faChalkboardTeacher}
                            text={t('teacher')}
                            url="register/teacher"
                        />
                        <SelectionTile
                            icon={faSchool}
                            text={t('staff')}
                            url="register/staff"
                        />
                        <SelectionTile
                            icon={faUser}
                            text={t('other')}
                            url="register/other"
                        />
                    </div>
                </div>
            </Center>
        </>
    );
}

export default RegisterPage;
