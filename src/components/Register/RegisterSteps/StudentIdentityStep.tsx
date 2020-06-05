import React, { ChangeEvent, useContext } from 'react';
import './StudentIdentityStep.scss';
import { StudentRegisterContext } from '../../../pages/register/student';
import InputField from '../../Form/InputField';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import enRegisterStudent from '../../../locales/en/register/register-student.json';
import frRegisterStudent from '../../../locales/fr/register/register-student.json';

// Load languages
i18next.addResourceBundle('fr', 'translation', frRegisterStudent);
i18next.addResourceBundle('en', 'translation', enRegisterStudent);

export default function StudentIdentityStep() {

    const { userData, dispatchUserData } = useContext(StudentRegisterContext);
    const { t } = useTranslation();

    function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
        const { value, attributes } = evt.target;
        const key = attributes.getNamedItem('name')?.value!;
        dispatchUserData({ type: 'SET_FIELD', payload: { field: 'identity', key, value } });
    }

    return (
        <>
            <h1>{t('who are you')}</h1>
            <div id="student-identity-inputs">
                <InputField
                    type="text"
                    name="lastName"
                    value={userData.identity.lastName}
                    label={t('name')}
                    onChange={handleInputChange}
                    onBlur={() => {
                        console.log('save (component)');
                        dispatchUserData({ type: 'WRITE_CHANGES' });
                    }}
                    required
                    autoFocus
                />
                <InputField
                    type="text"
                    name="firstName"
                    value={userData.identity.firstName}
                    label={t('first name')}
                    onChange={handleInputChange}
                    onBlur={() => dispatchUserData({ type: 'WRITE_CHANGES' })}
                    required
                />
                <InputField
                    type="date"
                    name="birthDate"
                    value={userData.identity.birthDate}
                    label={t('birth date')}
                    onChange={handleInputChange}
                    onBlur={() => dispatchUserData({ type: 'WRITE_CHANGES' })}
                    required
                />
                <InputField
                    type="text"
                    name="country"
                    value={userData.identity.country}
                    label={t('country')}
                    onChange={handleInputChange}
                    onBlur={() => dispatchUserData({ type: 'WRITE_CHANGES' })}
                    required
                />
                <InputField
                    type="text"
                    name="city"
                    value={userData.identity.city}
                    label={t('city')}
                    onChange={handleInputChange}
                    onBlur={() => dispatchUserData({ type: 'WRITE_CHANGES' })}
                    required
                />
                <InputField
                    type="text"
                    name="institution"
                    value={userData.identity.institution}
                    label={t('institution')}
                    onChange={handleInputChange}
                    onBlur={() => dispatchUserData({ type: 'WRITE_CHANGES' })}
                    required
                />
            </div>
        </>
    );
}
